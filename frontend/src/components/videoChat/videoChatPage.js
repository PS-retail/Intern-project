
import React, {useContext} from 'react';
import { useParams } from 'react-router';


import VideoChat from './videoChat.js'
import { AuthContext } from "../general/auth-context";
import PlayGround from '../playGround/playGroundPage';

import styled from "styled-components";
import tw from "twin.macro";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    h-full
    w-full
    relative
    overflow-x-hidden
    
  `}
`;


const PlayGroundContainer = styled.div`
  ${tw`
    
    absolute right-[160px]
    absolute top-[90px]
    align-top
    h-[400px]
    w-[400px]
    z-10
    
    
  `}
`;

const VideoChatPage = () => {
  const meetingId = useParams().mId;
  const auth = useContext(AuthContext);

  const username = auth.username;

  return (
    <PageContainer>
      <main>
        <VideoChat username = {username} roomName = {meetingId}/>
        <PlayGroundContainer> <PlayGround/> </PlayGroundContainer>
      </main>
    </PageContainer>
  );
};

export default VideoChatPage;