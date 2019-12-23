// axios demo
const axios = require("axios");
const postsApi = "https://jsonplaceholder.typicode.com/posts";
const wrongApi = "https://jsonplaceholder.typicode.com/posts1";
const missingApi = "";
const fakeError = "http://localhost:5000/fakeError";

// get api
const get = async api => {
  try {
    const { data } = await axios.get(api);
    console.log("\nTotal posts found:", data.length);
  } catch (error) {
    errorHandler(error);
  }
};

// axios error handler
const errorHandler = err => {
  if (err.response) {
    // Server responded with a status out of 200 range
    console.log("\nServer responded with a status out of 200 range");
    //console.log("DATA:", err.response.data);
    //console.log(err.response.headers);
    const { status } = err.response;
    console.log("Status:", status);
    switch (status) {
      case 400:
        console.log("Bad request.");
        break;

      case 404:
        console.log("Resource not found.");
        break;

      case 500:
        console.log("Internal server error.");
        break;
    }
  } else if (err.request) {
    // Request was made but no response
    console.log("\nNo response from server.");
    //console.error(err.request);
  } else {
    console.log("\nGeneric error");
    console.error(err.message);
  }
};

// good
get(postsApi);
// wrong api
get(wrongApi);
// missing api
get(missingApi);
// fake server error
get(fakeError);
