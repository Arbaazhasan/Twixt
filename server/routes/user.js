import express from 'express';
import { getUser, login, logout, register } from '../controllers/user.js';
import { authontication } from '../middleware/authontication.js';
import { randomColorGenerator } from '../utils/randomColorGenerator.js';

const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

router.post("/getuser", authontication, getUser);

router.post("/testApi", randomColorGenerator);



export default router;