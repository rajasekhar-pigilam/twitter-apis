const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.send("Your server is ready!!")
})

let users = [
    {
        name: "James Bond",
        title: "Agent"
    },
    {
        name: "Tony Stark",
        title: "Iron Man"
    }
]

app.get("/users", function(req, res){
    res.send(users)
})

app.get("/users/:index", (req, res)=>{
    let arrayIndex = req.params.index
    //console.log(req.params.index);
    res.send(users[arrayIndex])
})

app.listen(3000, function(){
    console.log("Server Started on port 3000");
})