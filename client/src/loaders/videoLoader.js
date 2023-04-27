import { redirect } from "react-router-dom";
import { YoutubeClone } from "../lib/apis";

export const videoLoader = async ({ request }) => {
  const videoId = request.url.split("?")[1];

  if (!videoId) return redirect("/");
  try {
    const resp = await YoutubeClone.get(`video?${videoId}`);
    if (resp.status === 200) return resp.data.video;
    throw resp;
  } catch (err) {
    throw err;
  }
};
