import React from "react";
import { ChatEngine } from "react-chat-engine";

import "./chat.css";

const Chat = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="2a9c8e7f-3b93-498c-88e1-97570d0d528d"
      userName="retailps2"
      userSecret="123123"
    />
  );
};

export default Chat;
