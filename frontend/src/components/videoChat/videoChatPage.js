
import React, {useContext} from 'react';
import { useParams } from 'react-router';


import VideoChat from './videoChat.js'
import { AuthContext } from "../general/auth-context";

import styled from "styled-components";
import tw from "twin.macro";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    h-full
    w-full
    
    overflow-x-hidden
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
      </main>
    </PageContainer>
  );
};

export default VideoChatPage;