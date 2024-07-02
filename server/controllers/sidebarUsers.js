import { User } from "../modules/user.js";

export const getUserForSidebar = async (req, res) => {
    try {

        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json({
            success: true,
            sidebarUser: filteredUsers
        });

    } catch (error) {

        res.status(500).json({
            status: false,
            message: "Internal Server Error !",
            error: error.message
        });

    }


};