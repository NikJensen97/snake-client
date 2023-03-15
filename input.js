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
   /* if (key === `^[[A`) {
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
   }*/
  //process.stdout.write('.');
    if (key === '\u0003') {
      process.exit();
    }
  });
};


module.exports = {setupInput};
