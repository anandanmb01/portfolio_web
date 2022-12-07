const express = require("express");
const app= express();
const env = require("dotenv").config();

const port =process.env.PORT || 3000;
app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.sendFile(index.html);
});

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})