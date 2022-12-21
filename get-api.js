const express = require("express");
const app = express();
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



app.get("/tweets", (req, res)=>{
    //res.send("Your tweets resource is ready")
  let sql = "SELECT * FROM `tw_tweets`"
  con.query(sql, (err, result, fields) => {
    if(err) throw err;

    res.send(result)
  })
})


app.listen(3000, () => {
  console.log("Your express js application is up and running on port 3000.");
});
