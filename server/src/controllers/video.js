import createError from "../../helpers/createError.js";
import videoCreated from "../../helpers/videoCreated.js";
import Video from "../models/video.js";
import User from "../models/user.js";

export const video = async (req, res, next) => {
  const { id } = req.query;

  try {
    // response error if id format error
    if (id.length !== 24)
      return next(createError(404, "This video is not working"));

    // find video in db
    const video = await Video.findById(id);

    // response error if not find data
    if (!video) return next(createError(404, "This video is not working"));

    // select video info needed
    const { __v, createdAt, updatedAt, _userId, videoImgUrl, ...others } =
      video._doc;

    // based userId take info author of the video
    const { displayName, avatar } = await User.findById(String(_userId));

    // interact video info and user info
    const completeInfo = {
      displayName,
      avatar,
      ...others,
      created: videoCreated(createdAt),
    };

    // // finally response data
    return res.status(200).json({ video: completeInfo });
  } catch (err) {
    next(err);
  }
};
