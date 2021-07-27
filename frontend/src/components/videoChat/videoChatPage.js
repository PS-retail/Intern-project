import React from 'react';
import './videoChat.css';
import VideoChat from './videoChat.js'

const VideoChatPage = () => {
  return (
    <div className="VideoChatPage">
      <header>
        <h1>Video Chat with Hooks</h1>
      </header>
      <main>
        <VideoChat />
      </main>
    </div>
  );
};

export default VideoChatPage;