const alarms = require("./alarms");

/*
setInterval(() => {
  alarms.connect("ip");
  alarms.check();
  alarms.disconnect();
}, 500);
*/

let i = 0;
const intervatId = setInterval(() => {
  console.log("i = ", i);
  i++;
  if (i === 5) clearInterval(intervatId);
}, 1000);
