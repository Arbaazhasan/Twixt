import jwt from "jsonwebtoken";
import { User } from "../modules/user.js";

export const authontication = async (req, res, next) => {
    try {

        const { token } = req.cookies;

        if (!token) return res.status(401).json({
            success: false,
            // message: "Unauthorized - Action forbidden!"
            message: "Session Expired!"
        });

        const decode = jwt.verify(token, process.env.JWT_URI);



        if (!decode) return res.status(401).json({
            success: false,
            message: "Unauthorized - Action forbidden!"
        });

        const user = await User.findById({ _id: decode._id });

        if (!user) return res.status(404).json({
            success: false,
            message: "User not found!"
        });

        req.user = user;

        next();

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Internal Server Error from Authontication",
            error: error.message
        });

    }
};