var no = 153
var rem =0;
var sum= 0
temp = no

//find no of digits
var count = 0
while(temp>0){
    temp = parseInt(temp / 10)
    count++
}

//15>0 true
//1>0 true
//0>0 false
while(no>0){

    rem = no % 10 // 153 - 3 // 5 //1
    //0 = 0 + 3*3*3 = 27
    //27 = 27 + 5*5*5 = 152
    //152 = 152 + 1*1*1 = 153
    //sum = sum + rem * rem * rem *rem
    sum = sum + rem ** count


    no = parseInt(no / 10)
    //153 = 15
    //15 = 1
    //1 = 0
}
console.log(sum) // 153