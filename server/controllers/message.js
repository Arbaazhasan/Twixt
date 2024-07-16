import { Conversation } from "../modules/conversation.js";
import { Message } from "../modules/message.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {

        const { message } = req.body;
        const { id: reciverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, reciverId] }
        });


        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, reciverId]
            });
        }

        const newMessage = await Message.create({
            senderId,
            reciverId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage);
            await conversation.save();
        }


        const reciverSocketId = getReceiverSocketId(reciverId);
        console.log("reciverSocketId" + reciverSocketId);
        if (reciverSocketId) {
            // io.to(<socket_id>).emit() used to send event to specific client
            io.to(reciverSocketId).emit("newMessage", newMessage);
        }

        res.status(200).json({
            success: true,
            message: newMessage
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Internal Server error from Message Send",
            error: error.message
        });

        console.log(error);

    }
};



export const getMessages = async (req, res) => {

    try {

        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate('messages');

        if (!conversation) return res.status(200).json([]);

        res.status(200).json({
            status: true,
            conversation: conversation.messages
        });



    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server error from Message Send",
            error: error.message
        });
    }

};