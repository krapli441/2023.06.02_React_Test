import express, { Request, Response, NextFunction } from "express";
import path = require("path");

const app = express();
const port = process.env.PORT || 2080;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.type("text/html");
  res.sendFile(__dirname + "/public/index.html");
});

// 404 페이지 작성
app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

// 500 페이지 작성

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.type("text/plain");
  res.status(500);
  res.send("500 - Internal Server Error");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
