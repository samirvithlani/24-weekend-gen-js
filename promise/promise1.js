// console.log("start")

// setTimeout(()=>{
//     console.log("process..")
// },2000)

// console.log("end")

//zomato -->open -->dish search 20, select[2] -->cart[2] --> orderplaces[2] --> [10] payment[upi] phonpe --> order delivery -->location-->deliver


//js Promise class --> object


//arrow function
const getData = ()=>{

    //console.log("get data...")
    //promise : object
    //new : keyword
    //Promise is class
    //resolve : function
    //reject:function
    var promise = new Promise((resolve,reject)=>{
        //resolve("promise has been resolved...")
        setTimeout(()=>{
            resolve("promise has been resolved...")
        },3000)
    })

    console.log(promise)
    promise.then((data)=>{
        console.log(data)
    })
    

}

getData()