import express from "express";
import { Server } from "socket.io";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5000;
const server = app.listen(PORT, console.log(`App is running on port ${PORT}`));

const io = new Server(server);
io.on("connection", (socket) => {
    console.log("connection made");

    socket.on("change", (change) => {
        socket.broadcast.emit("change", change);
    });
});
