var color = "yellow";

// var res = color == "red"? "stop" : "go";
// console.log(res); // stop

// if(color == "red"){
//     console.log("stop");
// }
// else if(color == "yellow"){
//     console.log("ready");
// }
// else{
//     console.log("go");
// }


var res = color=="red" ? "stop":color = "yellow" ? "ready":"Go";
console.log(res); // stop

var temp = 20;

var ans = temp >=40 ? "it is very not":
temp >=30 ? "it is hot":
temp>=20 ? "it is moderate":
"it is cold";
console.log(ans); // it is hot


var no1= 10
var no2 = 20
var no3 = 30

var max = no1>no2  && no1 >no3 ? no1 :
no2>no1 && no2>no3? no2:
no3
console.log("max = ",max); // 30
