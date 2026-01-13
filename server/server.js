const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const cp = require("cookie-parser");
const cors = require("cors");
const errorHandler = require("./middlewares/error-handler");
const notFound = require("./middlewares/not-found");
const connectDb = require("./utils/db");

const routes = require("./routers/index");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cp());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", routes);

app.use(notFound);
app.use(errorHandler);

const server = app.listen(process.env.PORT, () => {
  connectDb();
  console.log(`Server listening on port ${process.env.PORT}`);
});

server.on("error", (err) => console.log(err));
