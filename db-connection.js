const mysql = require('mysql');

let config = {
    host: "db4free.net", //localhost
    //user: "twitter_db_user",
    user: "at_user", //root
    //password: "swEqodl2aP_PrUrU0AkA",
    password: "vUt.F9F.CV.e8V6", //""
    database: "angular_twitter",
    port: 3306
}

const connection = mysql.createConnection(config);

connection.connect(function(err){
    if(err) throw err;
    console.log("Database connected successfully.");
})