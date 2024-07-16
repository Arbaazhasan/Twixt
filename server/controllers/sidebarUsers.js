import { Conversation } from "../modules/conversation.js";
import { User } from "../modules/user.js";

export const getAllUsers = async (req, res) => {
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


export const getUserConversationsUsers = async (req, res) => {
    try {

        const loggedInUserId = req.user._id;

        const conversations = await Conversation.find(
            { participants: loggedInUserId },
            { participants: 1, _id: 0 },
        );


        const receiverUserIds = conversations.map(conversation => {
            return conversation.participants.find(participantId => !participantId.equals(loggedInUserId));
        });

        console.log(receiverUserIds);

        const userConversations = await Promise.all(

            receiverUserIds.map(async (userId) => {

                const user = await User.findById(userId);
                return user;

            })

        );

        res.status(201).json({
            success: true,
            conversationsArray: userConversations

        });

    } catch (error) {

        res.status(500).json({
            status: false,
            message: "Internal Server Error !",
            error: error.message
        });

        console.error("Errro from getUserConversatin : ", error);
    }
};