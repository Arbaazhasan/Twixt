import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    bio: {
        type: String,
    },

    profilePicture: {
        url: String,
        public_id: String,
        isProfilePictureUpdate: {
            type: Boolean,
            default: false
        },
        profilePictureString: {
            type: String,
            required: true
        },
        profilePictureBackgroundColor: {
            type: String,
            required: true
        }
    },

    isOnline: {
        type: Boolean
    }

}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
