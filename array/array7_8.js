var marks = [21,22,18,24,23,23]

var flag = false;
for(let i=0;i<marks.length;i++){

    if(marks[i]>=24){
        flag = true;
        break;
    }


}
console.log(flag);


var flag1 =true;

for(let i=0;i<marks.length;i++){

    if(marks[i]<=20){
        flag1 = false;
        break;
    }
}

console.log(flag1);
