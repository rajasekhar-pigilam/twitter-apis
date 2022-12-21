const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')

const config = {
    host: "mysql.razs.me",
    user: "twitter_db_user",
    password: "swEqodl2aP_PrUrU0AkA",
    database: "angular_twitter"
    //port: "3306"
} 

const con = mysql.createConnection(config)

con.connect((err)=>{
    if(err) throw err;
    console.log("Connected to database successfully.");
})

app.use(bodyParser.json())

app.get("/", (req, res)=>{
    res.send("Server is up")
})

app.post("/tweets", (req, res)=>{
    //Step1: Read body data.
    let data = req.body
    console.log(data);
    //Step2: Prepare a query
    let sqlQuery = "INSERT INTO `tw_tweets` (`userId`, `tweet`) VALUES ('" + req.body.userId + "', '" + req.body.tweet + "');"
    //Step3: Execute your query
        //1. Load Library
        //2. Set Config
        //3. Create Connection
        //4. Connect to DB

    con.query(sqlQuery, (err, result)=>{
        if(err) throw err;
        console.log(result);
        if(result.affectedRows)
            res.send({id: result.insertId, message: "Your tweet has been posted successfully."})
        else
            res.send({message: "Something went wrong"})
    })

    //Step4: Read Result from query
    //Step5: Send data to client
})


app.listen(3000, ()=>{
    console.log("Your expressjs server is started on port 3000");
})