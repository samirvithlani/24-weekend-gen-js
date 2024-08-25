var isAdharCard = true;
var isPanCard = true;
var age = 100;
var diff =0;

//if true
//else false

//if(isAdharCard == true)
//if(isAdharCard)

if((isAdharCard || isPanCard) && age>=18){
    console.log("Person is eligible to vote");
}
else{
    if(age==0){
        console.log("born first !!");
    }
    else{
        diff = 18 - age;
        console.log("Person is not eligible to vote");
            console.log("Person can vote after ",diff," years");
    }
}