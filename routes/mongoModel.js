var mongojs=require("mongojs");

var databaseUrl = "waymarks"; // "username:password@example.com/mydb"
var collections = ["itineraries"]
var db = mongojs(databaseUrl, collections);

module.exports=db;