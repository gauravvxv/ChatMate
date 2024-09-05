const express = require("express");
const app = express();


app.use(express.json());

app.get("/" , (req,res)=>{
    res.send("API START");
})

app.listen(8000 , ()=>{
    console.log("SERVER is running")
})