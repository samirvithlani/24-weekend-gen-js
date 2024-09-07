var num1 = 10
var num2 = 15

//find lowest num
var min;
//10<15
if(num1<num2){
    min = num2
    //min = 15
}
else{
    min = num1
}

//min = 15
while(true){


    //15 % 10 ==0 && 15 % 15 ==0
    //15 % 10 ==0 && 116 % 15 ==0
    //20 % 10 ==0 && 20 % 15 ==0
    //25 % 10 ==0 && 25 % 15 ==0
    //29 % 10 ==0 && 29 % 15 ==0
    //30 % 10 ==0 && 30 % 15 ==0
    if(min % num1 ==0  && min % num2 ==0){
        console.log(min)//
        break;
    }
    min++ //16//17//18//19//20//25

}