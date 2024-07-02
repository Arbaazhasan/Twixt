import mongoose from "mongoose";
import express from "express";
import { authontication } from "../middleware/authontication.js";
import { getUserForSidebar } from "../controllers/sidebarUsers.js";

const router = express.Router();

router.post('/getusers', authontication, getUserForSidebar);

export default router

