import styled from "styled-components";
import tw from "twin.macro";
import React, { useState, useEffect } from "react";

import PlayGround from "../playGround/playGroundPage";
import Options from "./options";
import Video from "twilio-video";
import Participant from "./participent";
import Button from "../general/button";

const SmallContainer = styled.div`
  ${tw`
    h-[232px]
    float-right
    m-auto
  `}
`;

const SideContainer = styled.div`
  ${tw`
    h-[905px]
    w-[310px]
    mt-8
    left-0
    float-left
    table-cell
    align-bottom
  `}
`;

const MainContainer = styled.div`
  ${tw`
    mr-0
    h-[80%]
    py-8
    float-left
    absolute left-[310px]
  `}
`;

const RoomContainer = styled.div`
  ${tw`
    w-screen
    h-screen
    relative
    block
  `}
`;

const RoomName = styled.h3`
  ${tw`
    text-left
    p-4
  `}
`;

const Title = styled.span`
  ${tw`
    absolute
    top-1
    left-1/2
    text-center
    font-semibold
    text-xl
  `}
`;

const ButtonContainer = styled.div`
  ${tw`
    absolute
    top-2
    right-2
  `}
`;

const OptionsContainer = styled.div`
  ${tw`
    absolute
    bottom-1
    left-2
    ml-2
    z-50
  `}
`;

const PlayGroundContainer = styled.div`
  ${tw`
    float-right
    mt-2
    mr-2
    h-[400px]
    w-[400px]
    z-50
  `}
`;

const Room = ({ roomName, token, handleLogout }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [voice, setVoice] = useState(false);
  const [video, setVideo] = useState(true);
  const [captions, setCaptions] = useState(false);

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };
    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };
    Video.connect(token, {
      name: roomName,
    }).then((room) => {
      setRoom(room);
      room.on("participantConnected", participantConnected);
      room.on("participantDisconnected", participantDisconnected);
      room.participants.forEach(participantConnected);
    });
    return () => {
      setRoom((currentRoom) => {
        if (currentRoom && currentRoom.localParticipant.state === "connected") {
          currentRoom.localParticipant.tracks.forEach(function (
            trackPublication
          ) {
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

  const remoteParticipants = participants.map((participant) => (
    <Participant
      key={participant.sid}
      participant={participant}
      captions={captions}
    />
  ));

  return (
    <RoomContainer>
      <RoomName>Room ID: {roomName}</RoomName>
      <Title>B&O Meeting</Title>
      <ButtonContainer>
        <Button
          size={"small"}
          type={"video"}
          text={"Leave Room"}
          onClick={handleLogout}
        />
      </ButtonContainer>
      <MainContainer>{remoteParticipants[0]}</MainContainer>
      <SideContainer>
        <SmallContainer>
          {room ? (
            <Participant
              key={room.localParticipant.sid}
              participant={room.localParticipant}
              video={video}
              voice={voice}
            />
          ) : (
            ""
          )}
          {remoteParticipants.slice(1) && room && remoteParticipants.slice(1)}
        </SmallContainer>
      </SideContainer>
      <PlayGroundContainer>
        <PlayGround />
      </PlayGroundContainer>
      <OptionsContainer>
        <Options
          video={video}
          voice={voice}
          setVideo={setVideo}
          setVoice={setVoice}
          captions={captions}
          setCaptions={setCaptions}
        />
      </OptionsContainer>
    </RoomContainer>
  );
};

export default Room;
