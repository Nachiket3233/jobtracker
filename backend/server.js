require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("api is running ");
})

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("mongodb is connected"))
.catch((err)=>console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
    console.log(`server running on port ${PORT}`);
});