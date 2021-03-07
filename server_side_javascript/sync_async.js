var fs = require('fs');

//sync
console.log(1);
var data = fs.readFileSync('data.txt',{encoding:'utf8'});
console.log(data);

//Async
console.log(2);  //1
//2 fs.readFile 실행
fs.readFile('data.txt',{encoding:'utf8'}, function(err, data) { // 4 callback 함수 호출.
    console.log(data);
});
console.log(4); //3