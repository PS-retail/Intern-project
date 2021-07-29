import React, { useState, useEffect, useCallback } from "react";
import Lobby from "./lobby";
import Token, { videoToken } from "./token";
import Room from "./room";

require("dotenv").config();

const VideoChat = ({ username, roomName }) => {
  const [token, setToken] = useState(null);


  const handleSubmit = useCallback(
    async () => {
      const data = videoToken(username, roomName);
      setToken(data.toJwt());
    },
    [username, roomName]
  );

  useEffect(() => {
    handleSubmit();
  }, [handleSubmit]);

  const handleLogout = useCallback((event) => {
    setToken(null);
  }, []);

  let render;
  if (token) {
    render = (
      <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    );
  } else {
    render = (
      <h3>Error. Please Try again later</h3>
    );
  }
  return render;
};

export default VideoChat;
