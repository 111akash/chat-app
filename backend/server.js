// import path from "path";
// dotenv.config({path: path.resolve(".env")});
import express from "express";
import { chats } from "./data/data.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json()); // to accept JSON data

app.get("/", (req, res) => {
    res.send("API is running...");
})

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.port;
app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));


