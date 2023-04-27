import { Router } from "express";

import { video } from "../controllers/video.js";

const router = Router();

router.use("/", video);

export default router;
