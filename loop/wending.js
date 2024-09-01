var amount =110.30;
var note500 = 0;
var note200 = 0;
var note100 = 0;
var note50 = 0;
var note20 = 0;
var note10 = 0;
var note5 = 0;
var note2 = 0;
var note1 = 0;
var rem = 0;


while (amount > 0) {


    if(amount>=500){
        note500++
        amount = amount - 500
    }
    else if(amount>=200){
        note200++
        amount = amount - 200
    }
    else if(amount>=100){
        note100++
        amount = amount - 100
    }
    else if(amount>=50){
        note50++
        amount = amount - 50
    }
    else if(amount>=20){
        note20++
        amount = amount - 20
    }
    else if(amount>=10){
        note10++
        amount = amount - 10
    }
    else if(amount>=5){
        note5++
        amount = amount - 5
    }
    else if(amount>=2){
        note2++
        amount = amount - 2
    }
    else if(amount>=1){
        note1++
        amount = amount - 1
    }
    else{
        // = rem;
        rem = amount;
        amount = 0;
    }
}
console.log("500 notes: ",note500)
console.log("200 notes: ",note200)
console.log("100 notes: ",note100)
console.log("50 notes: ",note50)
console.log("20 notes: ",note20)
console.log("10 notes: ",note10)
console.log("5 notes: ",note5)
console.log("2 notes: ",note2)
console.log("1 notes: ",note1)
console.log("remaining: ",rem)

