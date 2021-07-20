import React, { useContext } from "react";
import { ChatEngine } from "react-chat-engine";

import "./chat.css";
import { AuthContext } from "../general/auth-context";

const Chat = () => {
  const auth = useContext(AuthContext);
  return (
    <ChatEngine
      height="100vh"
      projectID="2a9c8e7f-3b93-498c-88e1-97570d0d528d"
      userName= {auth.username}
      userSecret= {auth.password}
    />
  );
};

export default Chat;
