//Create API for Update operation on DB Records
//Step 1: Start Server
    //step1: Load express library
    const express = require('express')
    //step2: Create app server
    const app = express()

    const bodyParser = require('body-parser')

    app.use(bodyParser.json())

    //step3: Create default router
    app.get("/", (req, res)=>{
        res.send("Express server is ready.")
    })

//Step2: DB Connection
    //Step1: Load mysql library
    const mysql = require('mysql')
    //Step2: Create Connection Variable
    const con = mysql.createConnection({
        host: "mysql.razs.me",
        user: "twitter_db_user",
        password: "swEqodl2aP_PrUrU0AkA",
        database: "angular_twitter"
        //port: ""
    })
    //Step3: Connect DB
    con.connect((err)=>{
        if(err) throw err;
        console.log("Connected to database successfully");
    })

//Step3: Create Patch API 
    //Step1: Create routing
    app.patch("/tweets/:id", (req, res)=>{
        //Step2: Access request params
        let id = req.params.id
        //Step3: Body parser
        //Step3: Generate Update Query
        let sql = `UPDATE tw_tweets SET tweet = '${req.body.tweet}' WHERE tw_tweets.id = ${id};`
        //Execute Update Query
        con.query(sql,(err, result, fields)=>{
            if(err) throw err;

            //Send Result
            res.send(result)
        })
    })
    


    //step4: Listen to port
    app.listen(3000, ()=>{
        console.log("Server started on port 3000");
    })


