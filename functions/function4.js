//with param | argument
function add(a,b){

    console.log("This is add function");
    return a + b;

}

var x = add(10,11)
console.log(x);


function checkEligiblity(age){

    if(age>=18){
        return "Eligible for voting";
    }
    else{
        return "Not eligible for voting";
    }
}

var result = checkEligiblity(17);
console.log(result);

result = checkEligiblity(18);
console.log(result);

//daybase firstName lastname -- fullName

function getFullName(firstName,lastName){

    return firstName + " " + lastName;
}

var fullName = getFullName("ram","kumar");
console.log(fullName);
fullName = getFullName("shyam","kumar");
console.log(fullName);
