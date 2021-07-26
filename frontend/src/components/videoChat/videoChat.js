import React, { useState, useCallback } from 'react';
import Lobby from './lobby';
import Token, { videoToken } from './token'

require('dotenv').config();

const VideoChat = () => {
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState('');
  const [token, setToken] = useState(null);

 

  const handleUsernameChange = useCallback(event => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback(event => {
    setRoomName(event.target.value);
  }, []);

  

  const handleSubmit = useCallback(async event => {
    event.preventDefault();
    const data = videoToken(username, roomName)
    setToken(data.toJwt());
  }, [username, roomName]);

  const handleLogout = useCallback(event => {
    setToken(null);
  }, []);

  let render;
  if (token) {
    render = (
      <div>
        <p>Username: {username}</p>
        <p>Room name: {roomName}</p>
        <p>Token: {token}</p>
      </div>
    );
  } else {
    render = (
      <Lobby
         username={username}
         roomName={roomName}
         handleUsernameChange={handleUsernameChange}
         handleRoomNameChange={handleRoomNameChange}
         handleSubmit={handleSubmit}
      />
    );
  }
  return render;
};

export default VideoChat;