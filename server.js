import express from "express";
import { Server } from "socket.io";
import connectDB from "./backend/config/db.js";
import userRoutes from "./backend/routes/userRoute.js"

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRoutes);

const PORT = 5000;
const server = app.listen(PORT, console.log(`App is running on port ${PORT}`));

const io = new Server(server);
io.on("connection", (socket) => {
    console.log("connection made");

    socket.on("change", (change) => {
        socket.broadcast.emit("change", change);
    });

    socket.on("message", (message) => {
        io.sockets.emit("message", message);
    });

    socket.on("audio", (audio) => {
        socket.broadcast.emit("audio", audio);
    });
});
