//Initiallising node modules
var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express();

// Body Parser Middleware
app.use(bodyParser.json());

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});


//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

//Initiallising connection string
var dbConfig = {
  server: "james6342sql.database.windows.net", // Use your SQL server name
  database: "james6342db", // Database to connect to
  user: "sqladmin", // Use your username
  password: "P@ssw0rd", // Use your password
  port: 1433,
  // Since we're on Windows Azure, we need to set the following options
  options: {
        encrypt: true
    }
};

//Function to connect to database and execute query
var  executeQuery = function(res, query){
     // sql.connect(dbConfig, function (err) {
     //     if (err) {
     //                 console.log("Error while connecting database :- " + err);
     //                 res.send(err);
     //              }
     //              else {
     //                     // create Request object
     //                     var request = new sql.Request();
     //                     // query to the database
     //                     request.query(query, function (err, result) {
     //                       if (err) {
     //                                  console.log("Error while querying database :- " + err);
     //                                  res.send(err);
     //                                 }
     //                                 else {
     //                                   res.send(result.recordsets[0]);
     //                                        }
     //
     //                           });
     //                   }
     //  });
     new sql.ConnectionPool(dbConfig).connect().then(pool => {
       return pool.request().query(query)
     }).then(result => {
       let rows = result.recordset
       res.setHeader('Access-Control-Allow-Origin', '*')
       res.status(200).json(rows);
       sql.close()
     }).catch(err=>{
       res.status(500).send({message: "${err}"})
       sql.close();
     });

}

//GET API
app.get("/api/measurements", function(req , res){
                var query = "select top 20 * from [dbo].[Measurement] order by [MeasurementID] desc";
                // var query = "select * from [dbo].[Measurement]";
                executeQuery (res, query);
});
