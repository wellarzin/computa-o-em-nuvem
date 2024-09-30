import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("COMPUTAÇÃO EM NUVEM! || Bruno Wellar");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Rodando em http://localhost:${port}`);
});
