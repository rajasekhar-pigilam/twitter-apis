const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.send("Your server is ready!!")
})

app.get("/asdfd", function(req, res){
    res.send("Your are in /asdfd route.")
})

app.listen(3000, function(){
    console.log("Server Started on port 3000");
})