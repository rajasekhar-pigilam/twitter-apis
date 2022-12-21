const express = require("express");
const app = express();
const bodyParser = require('body-parser')

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "mysql.razs.me",
  user: "twitter_db_user",
  password: "swEqodl2aP_PrUrU0AkA",
  database: "angular_twitter"
}) 

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use(bodyParser.json()) // for parsing application/json
//app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("Hello Fullstack Developers");
});

app.get("/users/:id", (req, res)=>{
  con.query("SELECT * FROM `tw_users` WHERE `id` = " + req.params.id, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result)
  });
})

app.get("/tweets/:id", (req, res) => {
    let tweets = [
        {
        name: "Sumanth",
        designation: "Student",
        tweet:
            "Praesentium et et dolor minus ut. Earum aperiam illo facilis cupiditate. Qui suscipit aperiam. Quas est saepe eligendi ad non necessitatibus nemo eos. Autem dolore consequatur nostrum. Cumque molestiae omnis necessitatibus pariatur dolores aspernatur sint.",
        photo:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/492.jpg",
        createdAt: 1668871388477,
        updatedAt: 1668871388477,
        id: 1,
        },
        {
        name: "Lakshman Rao",
        designation: "Fullstack Developer Level 2",
        tweet:
            "Aliquam sed consequuntur qui debitis incidunt doloremque voluptas et eum. Explicabo soluta omnis enim mollitia. Natus nihil accusamus quia et perspiciatis officiis dignissimos.",
        photo:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/592.jpg",
        createdAt: 1668871614048,
        updatedAt: 1668871801867,
        id: 2,
        },
    ];
    res.send(tweets[req.params.id-1]);
});

app.post("/tweets", (req, res)=>{
  let sql = "INSERT INTO `tw_tweets` (`userId`, `tweet`) VALUES ("+ req.body.userId +", '"+ req.body.tweet +"');"
    
  con.query(sql, function(err, result, fields){
    if (err) throw err;
    console.log(result);
    res.send({message: "Tweet posted successfully."})
  })
})

app.get("/tweets", (req, res)=>{
  let sql = "SELECT * FROM `tw_tweets`"
  con.query(sql, (err, result, fields) => {
    if(err) throw err;

    res.send(result)
  })
})

app.put("/tweets/:id", (req, res)=>{
  let id = req.params.id;
  let sql = "UPDATE `tw_tweets` SET `userId` = "+ req.body.userId +", `tweet` = '"+ req.body.tweet + "' WHERE `tw_tweets`.`id` = " + id
    
  con.query(sql, function(err, result, fields){
    if (err) throw err;
    console.log(result);
    res.send({message: "Tweet updated successfully."})
  })
})

app.delete("/tweets/:id", (req, res)=>{
  let id = req.params.id;
  let sql = "DELETE FROM tw_tweets WHERE `tw_tweets`.`id` = " + id
    
  con.query(sql, function(err, result, fields){
    if (err) throw err;
    console.log(result);
    res.send({message: "Tweet deleted successfully."})
  })
})

app.listen(3000, () => {
  console.log("Your express js application is up and running on port 3000.");
});
