var record =[["sachin",120,100],["virat",100,90],["dhoni",80,70]];
//["sachin",]
//120*50 = 6000
//100*100 = 10000 => 16000

var data = record.map((d)=>{
    //return [d[0],d[1],d[2]]
    return [d[0],d[1]*50+d[2]*100]
})
console.log(data)