var users = ["ram","shyam","seeta","geeta","rita"];
var upperUser = users.map((u)=>{
    return u.toUpperCase();
})

//map foreach
//map will return a new array with the same length as the original array
//foreach will return nothing

// for(let i=0;i<users.length;i++){

//     upperUser.push(users[i].toUpperCase());

// }
console.log(upperUser);


var sales = [10,20,22,12,15]
var salesWithTax = sales.map((s)=>{
    return s*1.05; //5% tax
})
console.log(salesWithTax);