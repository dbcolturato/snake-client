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
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
}

const handleUserInput = function(key) {
    switch (key) {
      case '\u0003':
        process.exit();
        break;
      case 'w':
        connection.write("Move: up");
        break;
      case 'a':
        connection.write("Move: left");
        break;
      case 's':
        connection.write("Move: down");
        break;
      case 'd':
        connection.write("Move: right");
        break;
      case 'h':
        connection.write("Say: Hi");
        break;
      case 'b':
        connection.write("Say: Bye");
        break;
    }
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