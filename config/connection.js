var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  port: 3306,
  user: "dwqcz05nnn5oc4kr",
  password: "cue16lncbbkkbcbi",
  database: "pcpartsDB"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;