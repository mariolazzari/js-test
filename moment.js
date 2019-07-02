// https://momentjs.com/
const moment = require("moment");

// actual locale
let locale = moment.locale();
console.log("My locale:", locale);
// set italian locale
if (locale !== "it") {
  moment.locale("it");
  locale = moment.locale();
  console.log("My locale:", locale);
  console.log("Oggi:", moment().format("ddd DD MMM YYYY"));
}

// formats

// relative time: fromNow

// calendar
console.log("Calendar:", moment().calendar());
