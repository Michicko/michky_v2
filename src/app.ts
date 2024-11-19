import "dotenv/config";
import express from "express";
import morgan from "morgan";
import path from "node:path";
import { fileURLToPath } from "node:url";

// router
import viewsRouter from "./routes/viewsRoute.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use((req, _res, next) => {
  req.requestedTime = new Date().toISOString();
  console.log(req.requestedTime);

  next();
});

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static(path.join(__dirname, "public")));

// view engine
app.set("view engine", "pug");

// set views folder
app.set("views", path.join(__dirname, "./views"));

// routes
app.use("/", viewsRouter);

export default app;
