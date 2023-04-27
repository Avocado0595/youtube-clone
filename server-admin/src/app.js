import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/connectDB";
import routes from "./routes/index";

const app = express();

const PORT = 9999;

dotenv.config();
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  connectDB();
  console.log("server is running at address : http://localhost:9999");
});
