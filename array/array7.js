var marks = [21,22,18,24,23,23]

var flag = marks.some((mark)=>{
    //21 >= 24
    //22 >= 24
    //18 >= 24
    //24 >= 24 => true
    return mark>=24;
})

console.log(flag);


var flag =marks.every((mark)=>{
    return mark>=18;
})

console.log(flag);


//some ---> 