import mongoose from "mongoose";
import connection_string from "./uri.js";

const connectDB = async () => {
    try {
        const con = await mongoose.connect(connection_string, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Database connected : ${con.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
