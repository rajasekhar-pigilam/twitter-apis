const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get("/", function(req, res){
    res.send("Your server is ready!!")
})

app.post("/users", (req, res)=>{
    console.log(req.body);
    res.send(req.body)
})

app.listen(3000, function(){
    console.log("Server Started on port 3000");
})