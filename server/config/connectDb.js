// config connect db

import mongoose from "mongoose";

import config from "./config.js";

// function used connect db
const connectDb = async () => {
  try {
    await mongoose.connect(config.db.key);
    console.log("connect db success");
  } catch (err) {
    console.log("connect db failed :(");
  }
};

export default connectDb;
