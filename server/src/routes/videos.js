import { Router } from "express";
import videos from "../controllers/videos.js";

const router = Router();

router.get("/", videos);

export default router;
