const express = require("express");

const app = express();

app.get("/", (req,res)=>{
res.send("Hello, World");
});

app.get("/greet", (req, res) => {
    res.send("Hello, Everyone!!!");
});



app.listen(8500, () => {
    console.log("😎 Server running on PORT 4000");
});