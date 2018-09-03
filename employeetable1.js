var express=require("express");
var app=express();
app.listen(8082);
app.get("/",function(req,res){
	res.sendFile(__dirname+"/"+"employeetable.html");
});
var emp=[{
	empno: "0001",
	empname : "Hari",
	phone : "7765654543",
	address: "Hyderabad",
	dob : "12-06-95",
    ms : "Un-married"
	},{
	empno: "0002",
	empname : "Narsing",
	phone : "9765345643",
	address: "Warangal",
	dob : "30-09-95",
    ms : "Un-married"
	},{
	empno: "0003",
	empname : "Veerendra",
	phone : "9876544543",
	address: "Secunderabad",
	dob : "27-08-95",
    ms : "Un-married"
	}];

app.get("/empdetails",function(req,res){
	res.send(JSON.stringify(emp));
});



