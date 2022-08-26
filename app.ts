import path from "path";
import http from "http";
import express, { Express } from "express";
import bodyParser from "body-parser";

// locals
import shopRoutes from "./routes/shop";
import adminRoutes from "./routes/admin";
import { get404 } from "./controllers/ErrorController";

// database
import * as MySQLConnector from "./utils/mysql.database";

const app = express();

MySQLConnector.init();

// db.execute("SELECT * FROM products")
//     .then((result: any) => {
//         console.log(result);
//     })
//     .catch((err: any) => {
//         console.error(err);
//     });

app.set("view engine", "ejs");
// app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(get404);

// customs
// const routes = require("./routes");

// const server = http.createServer(routes);

app.listen(3001);
