import express from "express"; 
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

console.log(process.env.MONGO_URI);

app.use(express.json()); // to parse req.body (for user)
app.use(express.urlencoded({ extended: true})); // to parse from data(urlencoded)

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});