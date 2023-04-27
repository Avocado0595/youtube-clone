import express from "express";
import cors from "cors";
import passport from "passport";


import session from "express-session";
import routes from "./routes/index.js";
import connectDb from "../config/connectDb.js";
import config from "../config/config.js";
import errorHandler from "../middlewares/errorHandler.js";
import passportConfig from "../config/passport.js";

// initial app
const app = express();

// config
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,PATCH,DELETE",
    credentials: true
  })
);

passportConfig();
app.use(
  session({
    secret: "conmeomaunau",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 86400000 },
  })
);
app.use(passport.initialize()); // call in every request , check data in session
app.use(passport.session());

// routes
app.use(routes);

// error handler
app.use(errorHandler);

// server is running at port
app.listen(config.port, () => {
  console.log(`server is running at address http://localhost:${config.port}`);
  connectDb();
});
