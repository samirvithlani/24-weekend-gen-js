function getCount(name,ch){


    var count =0;
    for(let i=0;i<name.length;i++){
        if(name[i]==ch){
            count++;
        }
    }

    return count;
}

var cnt = getCount("hello",'l');
console.log(cnt); // 2


function printNo(sp,ep){


    for(let i=sp;i<=ep;i++){
        console.log(i);
    }

}
//printNo(1,10);

function getSum(sp,ep){


    //1 5
    var sum =0;
    //i =1;1<=5 true
    //i++ = i = 2
    //2<=5 true
    for(let i=sp;i<=ep;i++){
        //0 = 0+1 = 1
        //1 = 1+2 = 3
        //3 = 3+3 = 6
        //6 = 6+4 = 10
        //10 = 10+5 = 15
        sum = sum + i;
    }

    return sum;

}

var sum = getSum(1,5);
console.log(sum);
sum = getSum(1,10);
console.log(sum);
sum = getSum(1,1000);
console.log(sum);


function checkIsEven(num){
    //code..
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }

}


var x = checkIsEven(10); // true
console.log(x);


function checkIsSpace(name){
    //name = "hi this is java"
    //name="amit"
    var flag = false;

    for(let i=0;i<name.length;i++){

        if(name[i]==''){
            //return true;
            flag = true;
            break;
        }

    }
    return flag;


}

var y = checkIsSpace("hi this is java");
console.log(y); // true









