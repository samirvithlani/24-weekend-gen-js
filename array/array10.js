var users = [["Ms","Virat"],["Rohit","Sky"],["Abd","Maxwell"]];

// for(let i=0;i<users.length;i++){

//     for(let j=0;j<users[i].length;j++){
//         console.log(users[i][j]);
//     }


// }


//["MS","VIRAT"]
//["ROHIT","SKY"]
//["ABD","MAXWELL"]
users.forEach((u)=>{
    //console.log(u)
    u.forEach((x)=>{
        console.log(x);
    })
})