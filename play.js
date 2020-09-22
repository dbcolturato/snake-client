const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
let connected = connect();

setupInput(connected);