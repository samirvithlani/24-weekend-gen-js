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
            //resolve("promise has been resolved...")
            reject("promise has been rejected..")
        },3000)
    })

    console.log(promise)
    promise.then((data)=>{
        console.log(data)
    })
    promise.catch((err)=>{
        console.log(err)
    })
    

}

//getData()





const traficAI = ()=>{


    var promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({car:20,bike:22,cycle:2,total:44})
        },3000)
    })

    console.log(promise)
    promise.then((data)=>{
        console.log(data)
    })
}


//traficAI()

const generateQuestions  = ()=>{


    var prom = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve([{id:1,question:"what is java"},{id:2,question:"what is javascript"}])
        },4000)
    })
    console.log(prom)
    prom.then((questions)=>{
        console.log(questions)
    })
    

}

generateQuestions()