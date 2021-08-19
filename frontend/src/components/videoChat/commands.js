import { socket } from './webSocket'

export const commands = (line) => {
  
  const commands = [
    {
      command: "reset",
      callback: () => socket.emit("filter", "reset", (response) => console.log(response.status)),
        
    },
    {
      command: "speaker",
      callback: () => socket.emit("filter", "speaker", (response) => console.log(response.status)),
    },
    {
      command: "headphones",
      callback: () => socket.emit('filter', "headphones", (response) => console.log(response.status)),
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
