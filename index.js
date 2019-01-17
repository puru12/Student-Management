var express = require("express");
var mongoose = require('mongoose');
var body_parser = require("body-parser");
var path = require('path');

var app = express();
var studentRouter = require('./routes/studentRouter');
var collegeRouter = require('./routes/collegeRouter');

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.use(body_parser.json());
app.use(body_parser.urlencoded());
app.use('/api/students', studentRouter);
app.use('/api/colleges', collegeRouter);
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect("mongodb://localhost/mydb",{
  useNewUrlParser:true
}).then(function(){
  console.log("database connected");
}).catch(function(err){
  console.log("could not connect to database")
});

const PORT = 3000;
app.listen(PORT, function() {
  console.log("Server running on port : " + PORT);
});
