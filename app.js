var express =require("express");
var app=express();

app.set("view engine", "ejs");
app.use( express.static( "public" ) );//to connect the style sheet you have to write this line
//where public is the directory of your style sheets.

app.get("/",function(req,res){
	res.render("welcome");
})

app.get("/post",function(req,res){
	res.render("post");
})


app.listen(7070, function(){
	console.log("My blog");
})