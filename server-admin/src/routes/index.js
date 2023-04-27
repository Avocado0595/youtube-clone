import { Router } from "express";
import { uploadVideo } from "../controllers/videoController";

export const router = Router();

router.use("/dashboard/upload/video", uploadVideo);

export default router;
