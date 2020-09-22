const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: DBC");
  });
  // conn.on('connect', () => {
  //   conn.write("Move: down");
  //   setTimeout(() => conn.write("Move: left"), 1000);
  //   setTimeout(() => conn.write("Move: left"), 2000);
  //   let interval = setInterval(() => conn.write("Move: left"), 50);
  //   clearInterval(interval);
  // });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
}

module.exports = connect;