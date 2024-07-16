import mongoose from "mongoose";
import express from "express";
import { authontication } from "../middleware/authontication.js";
import { getUserConversationsUsers, getAllUsers } from "../controllers/sidebarUsers.js";

const router = express.Router();

router.post('/getusers', authontication, getAllUsers);
router.get('/getuserconversations', authontication, getUserConversationsUsers);


export default router

