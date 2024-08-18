var a =100
console.log("value of a outside of block.. ::",a)

{
    console.log("value of a inside of block.. ::",a)
    var x = 200
    console.log("value of x inside of block.. ::",x)
}
console.log("value of x outside of block.. ::",x)


var p1 = 100
p1 = 200 //reassign
console.log("value of p1 ::",p1)

var q1 = 120
var q1 = 220 //redeclare
console.log("value of q1 ::",q1)