const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const Meeting = require("../models/meeting");

const getMeetings = async (req, res, next) => {
  let meetings;
  try {
    meetings = await Meeting.find({});
  } catch (err) {
    const error = new HttpError("Fetching meetings failed.", 500);
    return next(error);
  }

  res.json({ meetings: meetings.map((meeting) => meeting.toObject({ getters: true })) });
};

const createMeeting = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { date, time, reason } = req.body;

  let existingMeeting;
  try {
    existingMeeting = await Meeting.findOne({ date: date, time: time });
  } catch (err) {
    const error = new HttpError(
      "Creating Meeting Failed, please try again later.",
      500
    );
    return next(error);
  }

  if (existingMeeting) {
    const error = new HttpError(
      "Meeting exists already!",
      422
    );
    return next(error);
  }

  const createdMeeting = new Meeting({
    date,
    time,
    reason,
    status: "Booked"
  });

  try {
    await createdMeeting.save();
  } catch (err) {
    const error = new HttpError(
      "Creating meeting failed, please try again later.",
      500
    );
    return next(error);
  }

  res
    .status(201)
    .json({
      meeting: createdMeeting.toObject({ getters: true }),
      message: "Creation Successfull",
    });
};

exports.getMeetings = getMeetings;
exports.createMeeting = createMeeting;
