var mysql = require('mysql');

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
var connection = mysql.createConnection({
    host: "	s554ongw9quh1xjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "	a6us1r9x3p681n9u",
    password: "Tomwatson123",
    database: "	mizati964pvd1lp9"
});
}
connection.connect(function(err){
    if (err){
        console.error("error connecting to database: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;