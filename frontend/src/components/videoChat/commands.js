import { io } from "socket.io-client";

const ENDPOINT = "http://localhost:5000";
var socket;

export const commands = (line) => {
  socket = io(ENDPOINT);
  const commands = [
    {
      command: "reset",
      callback: () => socket.emit("reset", (response) => console.log(response.status)),
    },
    {
      command: "speaker",
      callback: () => socket.emit("speaker", (response) => console.log(response.status)),
    },
    {
      command: "headphones",
      callback: () => socket.emit('headphones', (response) => console.log(response.status)),
    },
  ];

  for (let i = 0; i < commands.length; i++) {
    if (line.toUpperCase().includes(commands[i].command.toUpperCase())) {
      commands[i].callback();
      return;
    }
  }
  return;
};
