//const net = require("net");
const {connect} = require(`./client.js`);
// establishes a connection with the game server
/* const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541",
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("i have connected");
  });
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};
*/

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  process.stdin.on('data', (key) => {
    if (key === `^[[A`) {
     conn.write(`Move: up`);
   }
   if (key === `^[[B`) {
     conn.write(`Move: down`);
   }
   if (key === `^[[D`) {
     conn.write(`Move: left`);
   }
   if (key === `^[[C`) {
     conn.write(`Move: right`);
   }
  //process.stdout.write('.');
    if (key === '\u0003') {
      process.exit();
    }
  });
}; 
setupInput();
