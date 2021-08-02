import React, { useState, useEffect } from 'react';
import Video from 'twilio-video';
import Participant from './participent';


import styled from "styled-components";
import tw from "twin.macro";



const LocalContainer= styled.div`
  ${tw`
    p-4
    
    absolute bottom-1/4 left-0
    h-[250px]
    

  `}
`;

const RemoteContainer= styled.div`
  ${tw`
    
   
    h-[700px]
    
    py-8
    absolute left-1/4
    
    
    
  `}
`;

const RoomContainer= styled.div`
  ${tw`
    w-screen
    h-screen
    flex
    relative   
    

  `}
`;

const RoomName= styled.h3`
  ${tw`
    text-left
    p-4

    
    

  `}
`;

const RoomLeaveButton= styled.button`
  ${tw`
    absolute top-5 right-5
    p-1
    text-lg
    font-semibold
    text-black
    border-solid
    border-2 
    border-black
    

  `}
`;

const Room = ({ roomName, token, handleLogout }) => {
    const [room, setRoom] = useState(null);
    const [participants, setParticipants] = useState([]);

    
    
    useEffect(() => {
        const participantConnected = participant => {
          setParticipants(prevParticipants => [...prevParticipants, participant]);
        };
        const participantDisconnected = participant => {
          setParticipants(prevParticipants =>
            prevParticipants.filter(p => p !== participant)
          );
        };
        Video.connect(token, {
          name: roomName
        }).then(room => {
          setRoom(room);
          room.on('participantConnected', participantConnected);
          room.on('participantDisconnected', participantDisconnected);
          room.participants.forEach(participantConnected);
        });
        return () => {
            setRoom(currentRoom => {
              if (currentRoom && currentRoom.localParticipant.state === 'connected') {
                currentRoom.localParticipant.tracks.forEach(function(trackPublication) {
                  trackPublication.track.stop();
                });
                currentRoom.disconnect();
                return null;
              } else {
                return currentRoom;
              }
            });
          };
          
    }, [roomName, token]);

    const remoteParticipants = participants.map(participant => (
        <Participant key={participant.sid} participant={participant} />
    ));  
    
    
    
    return (

      
    <RoomContainer>
        <RoomName>Room ID: {roomName}</RoomName>
        <RoomLeaveButton onClick={handleLogout}>Leave room</RoomLeaveButton>
        <RemoteContainer>
        {remoteParticipants}
        </RemoteContainer>
        
        <LocalContainer >
        {room ? (
            <Participant 
            
            key={room.localParticipant.sid}
            participant={room.localParticipant}
            />
        ) : (
            ''
        )}
        </LocalContainer>
    </RoomContainer>
    );  
};




export default Room;
