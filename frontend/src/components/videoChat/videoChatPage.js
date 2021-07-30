import React, {useContext} from 'react';
import { useParams } from 'react-router';

import './videoChat.css';
import VideoChat from './videoChat.js'
import { AuthContext } from "../general/auth-context";

const VideoChatPage = () => {
  const meetingId = useParams().mId;
  const auth = useContext(AuthContext);

  const username = auth.username;

  return (
    <div className="VideoChatPage">
      <header>
        <h1>B & O VideoChat(Under Construction)</h1>
      </header>
      <main>
        <VideoChat username = {username} roomName = {meetingId}/>
      </main>
    </div>
  );
};

export default VideoChatPage;