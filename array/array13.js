const users = ["ram","amit","akshit","shyam","ajay"]

// var filUsers =[];


// for(let i=0;i<users.length;i++){

//     if(users[i].startsWith("a")){
//         filUsers.push(users[i])
//     }

// }
// console.log(filUsers) // [ 'amit', 'akshit', 'ajay' ]


var fileUser= users.filter((user)=>{
    //true or false
    //return user.startsWith("a")
    return user.length>3
})
console.log(fileUser) // [ 'amit', 'akshit', 'ajay' ]
//string...
//name must contains a and s and having lentgh greater than 4
//find all palindromes names ["naman","madam","radar","level]
//check any name having any special char if yes then store to other array
