var data = [100,20,30,400,50,70,90,999,876]
//
var max =data[0]; // 100

for(let i=0;i<data.length;i++){


    //100>100 -> false -max=100
    //20>100 -> false -max=100
    //30>100 -> false -max=100
    //400>100 -> true -max=400
    //50>400 -> false -max=400
    //70>400 -> false -max=400
    //90>400 -> false -max=400
    //999>400 -> true -max=999
    //876>999 -> false -max=999
    if(data[i]>max){
        //max = 400
        //max = 999
        max = data[i];
    }


}

console.log("max value in an array ...",max) // 999