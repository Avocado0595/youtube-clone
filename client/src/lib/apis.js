import axios from "axios";

export const YoutubeClone = axios.create({
  baseURL: "http://localhost:8000",
});
