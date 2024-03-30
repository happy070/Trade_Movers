import express from "express";
const app = express();

app.use(express.static("./"));

import path from "path";

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

const port = 5173;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
