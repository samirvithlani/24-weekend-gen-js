var data = "india"

var index = -1;

for(let i=0;i<data.length;i++){

    //data[i] = "x" 'n' 'd' 'i' 'a'
    //data[i] = 'i' 'n' 'd' 'i'
    if(data[i]=='i'){
        index = i; //0 //3
        //break;
    }
}
console.log(index) //0