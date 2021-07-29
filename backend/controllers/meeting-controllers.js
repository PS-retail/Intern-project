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

  const { date, time, reason, participants } = req.body;

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
    status: "Booked",
    participants
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

const getMeetingById = async (req, res, next) => {
  const meetingId = req.params.mid; 

  let meeting;
  try {
    meeting = await Meeting.findById(meetingId);
  } catch (err) {
    const error = new HttpError("Fetching meetings failed.", 500);
    return next(error);
  }

  res.json({ meeting: meeting.toObject({getters: true}) });
};

const updateMeeting = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data.', 422);
  }

  const { date, time, reason, status, participants } = req.body;
  const meetingId = req.params.mid;

  let meeting;

  try {
    meeting = await Meeting.findById(meetingId)
  } catch (err) {
    const error = new HttpError('Updating Place failed', 500);
    return next(error);
  }
  
  meeting.date = date;
  meeting.time = time;
  meeting.reason = reason;
  meeting.status = status;
  
  if (participants.length !== 0) {
    meeting.participants = meeting.participants.concat(participants);
  }

  try {
    await meeting.save();
  } catch (err) {
    const error = new HttpError('Could not update place', 500);
    return next(error);
  }

  res.status(200).json({ meeting: meeting.toObject({getters: true}) });
};

const cancelMeeting = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data.', 422);
  }

  const meetingId = req.params.mid;

  let meeting;

  try {
    meeting = await Meeting.findById(meetingId)
  } catch (err) {
    const error = new HttpError('Updating Place failed', 500);
    return next(error);
  }
  
  meeting.status = 'Cancelled';

  try {
    await meeting.save();
  } catch (err) {
    const error = new HttpError('Could not update place', 500);
    return next(error);
  }

  res.status(200).json({ meeting: meeting.toObject({getters: true}) });
};

const getMeetingsByCreator =  async (req, res, next) => {

  const creator = req.params.creator;

  let meetings;

  try {
    meetings = await Meeting.find({participants : {$in :[creator]}})
    //.where(creator).in('participants');
  } catch (err) {
    const error = new HttpError('Fetching places failed', 500);
    return next(error);
  }
  

  res.json({ meetings: meetings.map((meeting) => meeting.toObject({ getters: true })) });
};


exports.getMeetings = getMeetings;
exports.getMeetingById = getMeetingById;
exports.createMeeting = createMeeting;
exports.updateMeeting = updateMeeting;
exports.cancelMeeting = cancelMeeting;
exports.getMeetingsByCreator = getMeetingsByCreator;