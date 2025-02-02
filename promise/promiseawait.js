
const searchDish = ()=>{

    console.log("searching dish...")
    var promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({name:"pizza",rest:"dominos",price:400,qty:1})
        }, 2000);
    })

    return promise;
    
}
const addToCart = (dishData)=>{

    //dishData paramm
    console.log("adding to cart...")
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(dishData)
        },1000)
    })
    return promise
}

const payment = (cartData)=>{

    console.log("starting payment...")
    const promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
                resolve({cartData:cartData,paymentData:{paymentId:"abc123",status:"success"}})
        }, 4000);
    })
    return promise

}

const zomato=async()=>{

        const dish = await searchDish()
        console.log(dish)
        const cart = await addToCart(dish)
        console.log(cart)
        const pay = await payment(cart)
        console.log(pay)

}
zomato()