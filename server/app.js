import express from "express";
import { config } from "dotenv";
import dbConnection from "./data/dbConnection.js";
import Server from "./server.js";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

// Routers 
import userRouter from './routes/user.js';
import messageRouter from "./routes/message.js";
import getUserRouter from "./routes/getUsers.js";
import { app, server } from "./socket/socket.js";


config({
    path: './data/config.env'
});




// Configure CORS ORIGIN 
app.use(cors({
    origin: process.env.CORS_ORIGIN_URL,
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'PUT']
}));


app.use(bodyParser.json());
app.use(cookieParser());




// Routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/message', messageRouter);
app.use('/api/v1/getusers', getUserRouter);


// Data Connection 
dbConnection();

// Server Running 
Server(server);