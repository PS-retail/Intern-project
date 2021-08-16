import React, { useState, useEffect, useRef, useMemo } from "react";
import { useCallback } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

import { commands } from "./commands";
import { useHttpClient } from "../general/http-hook";

const ParticipantContainer = styled.div`
  ${tw`
    h-full
    relative
  `};
`;

const NameContainer = styled.div`
  ${tw`
    top-0
    left-0
    h-[25px]
    w-[75px]
    bg-gray-500
    bg-opacity-50
    absolute
    flex
    justify-center
    content-center
  `};
`;

const CaptionsContainer = styled.span`
  ${tw`
    bottom-2
    left-1/2
    right-1/2
    h-[75px]
    w-[250px]
    bg-gray-300
    bg-opacity-25
    absolute
    flex
    justify-center
    content-center
  `};
`;

const ParticipantName = styled.span`
  ${tw`
    text-lg
    text-white
  `};
`;

const ParticipantVideo = styled.video`
  ${tw`
    h-full
  `};
`;

const NoVideo = styled.div`
  ${tw`
    flex
    justify-center
    content-center
    h-full
    w-[300px]
    text-xl
    text-white
    bg-black
  `};
`;

const MuteContainer = styled.div`
  ${tw`
    bottom-0
    left-0
    h-[15px]
    w-[50px]
    bg-gray-500
    bg-opacity-50
    absolute
    flex
    justify-center
    content-center
    text-xs
    text-red-600
  `};
`;

const Participant = ({ participant, video, voice }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const startListening = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'en-US'
  })

  const { sendRequest } = useHttpClient();
  const [subtitle, setSubtitle] = useState(null);
  const [command, setCommand] = useState(null);

  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);

  const videoRef = useRef();
  const audioRef = useRef();

  const trackpubsToTracks = (trackMap) =>
    Array.from(trackMap.values())
      .map((publication) => publication.track)
      .filter((track) => track !== null);

  useEffect(() => {
    const trackSubscribed = (track) => {
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => [...videoTracks, track]);
      } else {
        setAudioTracks((audioTracks) => [...audioTracks, track]);
      }
    };

    const trackUnsubscribed = (track) => {
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => videoTracks.filter((v) => v !== track));
      } else {
        setAudioTracks((audioTracks) => audioTracks.filter((a) => a !== track));
      }
    };

    setVideoTracks(trackpubsToTracks(participant.videoTracks));
    setAudioTracks(trackpubsToTracks(participant.audioTracks));

    participant.on("trackSubscribed", trackSubscribed);
    participant.on("trackUnsubscribed", trackUnsubscribed);

    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
      participant.removeAllListeners();
    };
  }, [participant]);

  useEffect(() => {
    const videoTrack = videoTracks[0];
    if (videoTrack) {
      videoTrack.attach(videoRef.current);
      return () => {
        videoTrack.detach();
      };
    }
  }, [videoTracks]);

  useEffect(() => {
    const audioTrack = audioTracks[0];
    if (audioTrack) {
      audioTrack.attach(audioRef.current);
      return () => {
        audioTrack.detach();
      };
    }
  }, [audioTracks]);

  const changeVideo = useCallback(
    (video) => {
      if (participant.videoTracks && !video) {
        participant.videoTracks.forEach((publication) => {
          if (publication.track) {
            publication.track.disable();
          }
        });
      } else if (participant.videoTracks && video) {
        participant.videoTracks.forEach((publication) => {
          publication.track.enable();
        });
      }
    },
    [participant.videoTracks]
  );

  const changeAudio = useCallback(
    (voice) => {
      if (participant.audioTracks && !voice) {
        participant.audioTracks.forEach((publication) => {
          if (publication.track) {
            publication.track.disable();
          }
        });
      } else if (participant.audioTracks && voice) {
        participant.audioTracks.forEach((publication) => {
          publication.track.enable();
        });
      }
    },
    [participant.audioTracks]
  );

  useEffect(() => {
    changeVideo(video);
  }, [changeVideo, video]);

  useEffect(() => {
    changeAudio(voice);
  }, [changeAudio, voice]);

  useEffect(() => {
    if (!listening) startListening();
    setSubtitle(transcript);
    console.log(subtitle)
  }, [listening, transcript, resetTranscript]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest({
          url: "http://localhost:5000/api/speech-to-text/",
          headers: null,
        });
        commands(responseData.transcript);
        setCommand(responseData.transcript)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [sendRequest, command]);

  return (
    <ParticipantContainer>
      <NameContainer>
        <ParticipantName>{participant.identity}</ParticipantName>
      </NameContainer>
      <ParticipantVideo ref={videoRef} autoPlay={true} />
      <audio ref={audioRef} />
    </ParticipantContainer>
  );
};

export default Participant;
