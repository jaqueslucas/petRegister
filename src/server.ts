import connect from "./models/connection";
import app from "./routes";
import dotenv from "dotenv";

connect();
dotenv.config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });