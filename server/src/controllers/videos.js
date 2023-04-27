import Video from "../models/video.js";
import User from "../models/user.js";
import videoCreatedAbout from "../../helpers/videoCreated.js";

async function findVideosByCategory(category) {
  // find video info of every video and return array contain videos
  return category === "all"
    ? await Video.find({})
    : await Video.find({ category });
}

async function addUserInfoForVideo(videos) {
  let newVideos = [];

  for await (const video of videos) {
    const { displayName, avatar, verify } = await User.findById(video._userId);

    const { createdAt, _id, title, videoImgUrl } = video._doc;

    const completeInfo = {
      displayName,
      avatar,
      verify,
      _id,
      title,
      videoImgUrl,
      created: videoCreatedAbout(createdAt),
    };
    newVideos = [...newVideos, completeInfo];
  }

  return newVideos;
}

const videos = async (req, res, next) => {

  const { category } = req.query;
  try {
    const videos = await findVideosByCategory(category);
    const newVideos = await addUserInfoForVideo(videos);

    setTimeout(() => {
      return res.status(200).json({ msg: "success", videos: newVideos });
    }, 1000);
  } catch (err) {
    next(err);
  }
};

export default videos;
