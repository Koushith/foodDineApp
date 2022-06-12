require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary")

mongoose.connect(process.env.DB_URL)
.then(console.log("Database Connected!"))
.catch(err => {
    console.log(`DB connection failed`)
    console.log(err);
    process.exit(1);
})

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}));

const order = require("./routes/Order");
app.use("/api/v1", order);

const item = require("./routes/Item");
app.use("/api/v1", item);

const table = require("./routes/Table");
app.use("/api/v1", table);

app.get("/", (req, res)=>{
    res.send("Hello to backend");
})

app.listen(4000, () => (
    console.log(`Server is running at port: ${4000}...`)
));