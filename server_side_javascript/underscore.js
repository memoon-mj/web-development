//underscore 자주 사용하는 모듈임.
var _ = require('underscore'); //underscore는 _로 표현하는 관습이 있음. 모듈 가져온 후 객체를 리턴 해준다. 
var arr = [3,6,9,1,12];
console.log(arr[0]);
console.log(_.first(arr)); //인덱싱 지정을 해주지 않아도 가독성있게 처리 가능.
console.log(arr[arr.length-1]);
console.log(_.last(arr));