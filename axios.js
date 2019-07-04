// axios demo
const axios = require("axios");
const postsApi = "https://jsonplaceholder.typicode.com/posts";
const wrongApi = "https://jsonplaceholder.typicode.com/posts1";
const missingApi = "";

// get api
const getPosts = async api => {
  try {
    const { data } = await axios.get(api);
    return data;
  } catch (ex) {
    let error = "";

    if (ex.response) {
      const { data, status } = ex.response;
      error =
        status === 404
          ? "Il server non può soddisfare la richiesta"
          : `${data.message}. ${data.error}`;
    } else if (ex.request) {
      error = "Non è possibile contattare il server.";
    } else {
      error = `Errore durante il caricamento dei post. ${ex.message}`;
    }

    return new Error(error);
  }
};

getPosts(postsApi)
  .then(posts => console.log("Total posts (ok):", posts.length))
  .catch(err => console.log("Error while getting posts (ok).", err));

getPosts(wrongApi)
  .then(posts => console.log("Total posts (wrong):", posts.length))
  .catch(err => console.log("Error while getting posts (wrong).", err));

getPosts(missingApi)
  .then(posts => console.log("Total posts (missing):", posts.length))
  .catch(err => console.log("Error while getting posts (missing).", err));
