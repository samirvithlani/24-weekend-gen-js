var users = [
    {
        id:1,
        name:"ram",
        age:23,
        hobbies:["cricket","football"]
    },
    {
        id:2,
        name:"shyam",
        age:24,
        hobbies:["cricket","football","hockey"]
    },
    {
        id:3,
        name:"mohan",
        age:25,
        hobbies:["cricket","hockey","swimming"]
    }

]
console.log(users);
// for(let i=0;i<users.length;i++){
//     console.log(users[i].id);
//     console.log(users[i].name);
// }
users.forEach((user)=>{
    console.log(user.id + " "+ user.name);
})

var filusers = users.filter((user)=>{
    return user.name.endsWith("m");
})
console.log(filusers);

var footballUsers = users.filter((user)=>{
    return user.hobbies.includes("football");
})
console.log(footballUsers);