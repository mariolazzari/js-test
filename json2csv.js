const fs = require("fs");
const { parseAsync } = require("json2csv");
const moment = require("moment");

const fields = ["VarName", "TimeString", "VarValue"];
const footer = `\r\n$RT_DIS$\r\n$RT_COUNT$`;
const opts = { fields, delimiter: ";", eol: "\r\n" };

// Current datetime formats
const fileNameDate = "YYYYMMDD";
const timeStringDate = "DD.MM.YYYY HH:mm:ss";

const test = async (path, data) => {
  try {
    // check if data available
    if (!data) {
      return;
    }

    // add missing fields to data
    const TimeString = moment().format(timeStringDate);
    data = data.map(d => ({ ...d, TimeString }));

    // create csv file in memory and add footer
    let csv = await parseAsync(data, opts);
    csv += footer;

    // set csv file name
    const fileDate = moment().format(fileNameDate);
    path += `${fileDate}.csv`;

    // save file to disk
    fs.writeFile(path, csv, { flags: "w", encoding: "utf8" }, err => {
      if (err) {
        logger(`Error while creating file ${path}`, err, "csvWriter");
      }
    });
  } catch (error) {
    console.log(`Error while creting ${path} in memory`, error, "csvWriter");
  }
};

const data = [
  { VarName: "tag1", VarValue: 1 },
  { VarName: "tag2", VarValue: 2 },
  { VarName: "tag3", VarValue: 3 }
];

test("test.csv", data);
