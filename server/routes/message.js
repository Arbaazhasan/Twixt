import express from "express";
import { authontication } from "../middleware/authontication.js";
import { getMessages, sendMessage } from "../controllers/message.js";

const router = express.Router();

router.get("/:id", authontication, getMessages);
router.post("/send/:id", authontication, sendMessage);

export default router;