
const { json } = require('express');
const mongoose = require('mongoose');
const Meeting = require('../models/meeting');


const sample = async () => {

    
    //Updates the status of meetings by comparing the current date/time with the start date/time of the meeting
    for await (const meeting of Meeting.find()) {

        var meetingDate = meeting.date;
        meetingDate+=' ';
        meetingDate+= meeting.time;
        meetingDate+= " GMT";
        
        var currentDate = new Date();

    
        if(Date.parse(currentDate)>Date.parse(meetingDate)){
            meeting.status = "Active";
        }
        
        await meeting.save();
        
    }
    
    
    

    
    


    
    
    
    
    
    

    
}

module.exports = sample;