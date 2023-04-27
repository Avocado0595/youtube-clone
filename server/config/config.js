// config server

import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });

const config = {
  // server run at port
  port: 8000,

  // config db
  db: {
    key: `mongodb://localhost:27017/youtube`,
  },

  // config google credentials
  googleCredentials: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callBackUrl: "/oauth2/redirect/google",
  },

  secretKey: process.env.SECRET_KEY
};

export default config;
