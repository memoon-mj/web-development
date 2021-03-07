var express = require('express');
var app = express();
app.use(express.static('public')); //static

app.get('/',function(req,res){
	res.send('welcome to home');
});

app.get('/dynamic', function(req,res) { //한번 실행된 다음 내용바꾸면 다시 실행시켜야함. -> dynamic
	var time = Date();
	var lis = '';
	for(var i = 0; i<5; i++) {
		lis = lis + `<li>coding</li>`;
	}
	var output = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		hello, Dynamic!!!
		<ul>
		${lis}
		</ul>
		${time}
	</body>
	</html>`;
	res.send(output);
}); 

app.get('/route',function(req,res) {
	res.send('hi,<img src = "/minji.JPG">')
});

app.get('/login',function(req,res) {
	res.send('login please');
});
app.listen(3000, function() {
	console.log('Connected 3000 port!');
});

