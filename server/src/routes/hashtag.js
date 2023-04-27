import { Router } from "express";

import hashtag from "../controllers/hashtag.js";

const router = Router();

router.get("/:hashtag", hashtag);

export default router;
