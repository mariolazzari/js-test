// read dot env variables
require("dotenv").config();
const { DOT_ENV } = process.env;
console.log(".env variables in app.js:", DOT_ENV);
