console.log("alarms.js module");

const connect = (ip, rack = 0, slot = 1) => {
  console.log("Connecting to " + ip);
};

const check = (plant = 1) => {
  console.log(`Check alarms on plant ${plant}`);
};

const disconnect = () => {
  console.log("Disconnect");
};

module.exports = { connect, check, disconnect };
