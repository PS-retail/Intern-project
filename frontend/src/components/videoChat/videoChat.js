import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router";
import { videoToken } from "./token";
import styled from "styled-components";
import tw from "twin.macro";
import Room from "./room";

require("dotenv").config();

const Slogan = styled.span`
  ${tw`
    font-semibold
    text-xl
    text-center
  `};
`;

const VideoChat = ({ username, roomName }) => {
  const [token, setToken] = useState(null);
  const history = useHistory();


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
    history.push('/');
  }, [history]);

  let render;
  if (token) {
    render = (
      <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    );
  } else {
    render = (
      <div style = {{display: 'flex'}}>
        <Slogan>Error. Please Try Again! Log back in or refresh your session!</Slogan>
      </div>
    );
  }
  return render;
};

export default VideoChat;
