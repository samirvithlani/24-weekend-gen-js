var data = [100,20,30,40,50,70,90,999,876]
console.log(data) 


var len = data.length;
console.log("length of an array ...",len)

var sum =0;

// for(let i=0;i<data.length;i++){
//     //0 =   0 + 100 = 100
//     //100 = 100 + 20 = 120
//     //120 = 120 + 30 = 150
//     //150 = 150 + 40 = 190
//     //190 = 190 + 50 = 240
//     //240 = 240 + 70 = 310
//     sum  = sum + data[i];
//     console.log(data[i])
// }



for(let i= data.length-1;i>=0;i--){
    console.log(data[i])
}

console.log("sum of an array ...",sum)


// console.log(data[0])
// console.log(data[1])
// console.log(data[2])
// console.log(data[3])
// console.log(data[4])
// console.log(data[5])
// console.log(data[6])
// console.log(data[7]) // undefined