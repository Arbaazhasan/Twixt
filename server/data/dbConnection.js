import mongoose from "mongoose";

const dbConnection = () => {

    mongoose.connect(process.env.MONGO_URI, ({ dbName: "Twixt" })).then((res) => {
        console.log("Database Connected!");
    }).catch((e) => {
        console.log(e);
    });
};

export default dbConnection;