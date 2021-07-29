const express = require('express');
const { check } = require('express-validator');

const meetingControllers = require('../controllers/meeting-controllers');
const fileUpload = require('../middleware/file-upload');

const router = express.Router();

router.get('/', meetingControllers.getMeetings);

router.get('/creator/:creator', meetingControllers.getMeetingsByCreator);

router.get('/:mid', meetingControllers.getMeetingById);

router.patch('/:mid', meetingControllers.updateMeeting);

router.delete('/:mid', meetingControllers.cancelMeeting);

router.post('/', meetingControllers.createMeeting);


module.exports = router;