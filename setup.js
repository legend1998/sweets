const express = require("express");
const path = require("path"); // import

const app = express();

// root route
// Method  - GET POST PUT DELETE

app.get("/", (req, resp) => {
  resp.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("listening on 3000");
});

// app.listen()---
