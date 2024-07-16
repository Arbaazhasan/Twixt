import { User } from "../modules/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { randomColorGenerator } from "../utils/randomColorGenerator.js";


export const register = async (req, res) => {
    const { name, username, password, bio, isOnline } = req.body;

    try {
        if (!name || !username || !password || !isOnline === undefined) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            });
        }

        const isUser = await User.findOne({ username });

        if (isUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists!"
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        let spacePos = name.indexOf(' ');

        const profilePictureString = spacePos > -1 ? name.charAt(0) + name.charAt(spacePos + 1) : name.charAt(0);

        const profilePictureBackgroundColor = randomColorGenerator();

        const user = await User.create({
            name,
            username,
            password: hashPassword,
            bio,
            profilePicture: {
                profilePictureString, profilePictureBackgroundColor
            },

            isOnline
        });

        const token = jwt.sign({ _id: user._id }, process.env.JWT_URI);

        await User.findByIdAndUpdate(user._id, { isOnline: true });


        res.status(200).cookie("token", token, {
            maxAge: 100 * 60 * 60 * 1000,
            httpOnly: true
        }).json({
            success: true,
            message: "Registration successful",
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};


export const login = async (req, res) => {

    try {

        const { username, password } = req.body;

        const isUser = await User.findOne({ username }).select('+password');

        if (!isUser) return res.status(400).json({
            success: false,
            message: "Incorrect user or password!"
        });

        const hashPassword = await bcrypt.compare(password, isUser.password);

        if (!hashPassword) return res.status(400).json({
            success: false,
            message: "Incorrect user or password!"
        });

        const token = jwt.sign({ _id: isUser._id }, process.env.JWT_URI);

        await User.findByIdAndUpdate(isUser._id, { isOnline: true });


        res.status(200).cookie("token", token, {
            maxAge: 100 * 60 * 60 * 100,
            httpOnly: true
        }).json({
            success: true,
            message: `welcome back ${isUser.name}`
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Internal Server error!",
            error: error.message
        });

    }
};


export const logout = async (req, res) => {
    try {

        const { token } = req.cookies;

        if (!token) return res.status(401).json({
            success: false,
            message: "not Valid Token"

        });

        // updating User goes offline 
        const decode = jwt.verify(token, process.env.JWT_URI);
        await User.findByIdAndUpdate(decode._id, { isOnline: false });

        res.status(200).cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true
        }).json({
            success: true,
            message: "Logout"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Internal server error!",
            error: error.message
        });

    }
};


export const getUser = async (req, res) => {
    try {

        res.status(200).json({
            success: true,
            message: req.user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error!",
            error: error.message
        });
    }
};

export const updateOflineTime = async (userId) => {

    try {

        if (userId) {
            const isUpdate = await User.findByIdAndUpdate(userId, { isOnline: false });

            if (isUpdate)
                console.log("User Offline ");
            else
                console.log("User Online");
        }
    } catch (error) {
        console.log(error);
    }

};