let connection;

const setupInput = function (conn) {
  connection = conn;
  const handleUserInput = function () {
  process.stdin.on('data', (key) => {
    if (key === '\u0077') {
     connection.write('Move: up');
   }
   if (key === '\u0073') {
     connection.write('Move: down');
   }
   if (key === '\u0061') {
     connection.write('Move: left');
   }
   if (key === '\u0064') {
     connection.write('Move: right');
   }
   if (key === '\u0067') {
     connection.write('Say: LOL');
   }
    if (key === '\u0003') {
      process.exit();
    }
  });
};
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = {setupInput};
