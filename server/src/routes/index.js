import { Router } from "express";

import videosRoute from "./videos.js";
import loginRoute from "./login.js";
import videoRoute from "./video.js";
import hashtagRoute from "./hashtag.js";
import passport from "passport";
const router = Router();

// route use find a video or many videos
router.use("/videos", videosRoute);

// route use authentication with third party
router.use("/auth", loginRoute);
router.use("/", router.get(
    "/oauth2/redirect/google",
    passport.authenticate("google", {
        successRedirect: "http://localhost:3000/"
    })
)
)
// route use get video
router.use("/video", videoRoute);

// hashtag
router.use("/hashtag", hashtagRoute);
export default router;
