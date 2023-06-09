import express, { Request, Response, NextFunction } from "express";
import path from "path";
// declare const __dirname: string;
const root = path.join(__dirname, "../../");
console.log(root);
const app = express();
// const port = process.env.PORT || 2080;
// const __dirname = path.resolve();

app.use(express.static(path.join(root, "/public")));
console.log(path.join(root, "/public"));

app.get("/", (req, res) => {
  // res.type("text/html");
  res.sendFile("index.html", { root: path.join(root, "/public") });
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

app.listen(2080, () => {
  console.log(`Listening on port 2080`);
});
