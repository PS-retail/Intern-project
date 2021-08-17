const recorder = require("node-record-lpcm16");

const speech = require("@google-cloud/speech");

const speechToText = (req, res, next) => {
  const encoding = "LINEAR16";
  const sampleRateHertz = 16000;
  const languageCode = "en-GB";
  const command_and_search = "command_and_search";
  const keywords = ["turn on", "turn off", "turn it on", "turn it off"];

  const recording = recorder.record({
    sampleRateHertz: sampleRateHertz,
    threshold: 0, //silence threshold
    recordProgram: "rec", // Try also "arecord" or "sox"
    silence: "2.0", //seconds of silence before ending
    endOnSilence: true,
    thresholdEnd: 0.5,
  });

  const request = {
    config: {
      encoding: encoding,
      sampleRateHertz: sampleRateHertz,
      languageCode: languageCode,
      enableAutomaticPunctuation: true,
      model: "default", // https://cloud.google.com/speech-to-text/docs/transcription-model
      useEnhanced: true,
    },
    interimResults: false,
  };

  const client = new speech.SpeechClient();

  const recognizeStream = client
    .streamingRecognize(request)
    .on("error", console.error)
    .on("data", (data) => {
      console.log(
        data.results[0] && data.results[0].alternatives[0]
          ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
          : `\n\nReached transcription time limit, press Ctrl+C\n`
      );
      const result = data.results[0].alternatives[0].transcript;
      recording.stop();
      res.json({transcript: result})
      return res.end();
    })
    .on('end', () => {
      console.log('Line Done');
    });

  recording.stream().on("error", console.error).pipe(recognizeStream);

  console.log("Listening, press Ctrl+C to stop.");
};

module.exports = speechToText;
