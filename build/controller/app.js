"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// declare const __dirname: string;
const root = path_1.default.join(__dirname, "../../");
console.log(root);
const app = (0, express_1.default)();
// const port = process.env.PORT || 2080;
// const __dirname = path.resolve();
app.use(express_1.default.static(path_1.default.join(root, "/public")));
console.log(path_1.default.join(root, "/public"));
app.get("/", (req, res) => {
    // res.type("text/html");
    res.sendFile("index.html", { root: path_1.default.join(root, "/public") });
});
// 404 페이지 작성
app.use((req, res) => {
    res.type("text/plain");
    res.status(404);
    res.send("404 - Not Found");
});
// 500 페이지 작성
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type("text/plain");
    res.status(500);
    res.send("500 - Internal Server Error");
});
app.listen(2080, () => {
    console.log(`Listening on port 2080`);
});
