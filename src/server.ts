import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const DB_NAME = "Store";
const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGODB_URL + DB_NAME).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server running on ${process.env.PORT}`);
    });
});
export { app };
