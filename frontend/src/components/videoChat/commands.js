export const commands = (line) => {
  const commands = [
    {
      command: "reset",
      callback: () => alert("Reset"),
    },
    {
      command: "speaker",
      callback: () => alert("Speaker"),
    },
    {
      command: "headphones",
      callback: () => alert("Headphones!"),
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
