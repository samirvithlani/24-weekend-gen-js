function add(){

    let a =100;
    let b = 200;
    let c = a + b;
    console.log("This is add function");
    //return 100;
    //return 100 + 200;
    //return c;
    return a + b;
}

var x = add();
console.log(x);



function greetings(){


    var time = 14;

    if(time>=12 && time<=18){
        return "good Afternoon"
    }
    else if(time>=6 && time<=12){
        return "Good Morning"
    }
    else{
        return "Good Night"
    }



    //return "Good Morning";
    //return "Good Night";

}

var greet = greetings();
console.log(greet);