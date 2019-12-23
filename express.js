const express = require("express");

// express app
const app = express();

// express router
const router = express.Router();
// fake internal server error api
router.get("/fakeError", (req, res) => {
  res.status(500).json({ error: "Fake internal server error." });
});
app.use(router);

// start express app
app.listen(5000, () => console.log("App listening on port 5000"));
