/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
}

const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
  stdin.on('data', (key) => {
    if (key === 'w') {
      connection.write("Move: up");
    }
    if (key === 'a') {
      connection.write("Move: left");
    }
    if (key === 's') {   
      connection.write("Move: down");
    }
    if (key === 'd') {
      connection.write("Move: right");
    }
    if (key === 'h') {
      connection.write("Say: Hi");
    }
    if (key === 'b') {
      connection.write("Say: Bye");
    }
  });
  return stdin;
}

module.exports = {
  setupInput: setupInput
};

// conn.on('connect', () => {
  //   conn.write("Move: down");
  //   setTimeout(() => conn.write("Move: left"), 1000);
  //   setTimeout(() => conn.write("Move: left"), 2000);
  //   let interval = setInterval(() => conn.write("Move: left"), 50);
  //   clearInterval(interval);
  // });