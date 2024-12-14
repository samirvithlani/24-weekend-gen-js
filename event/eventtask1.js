const products = [
    {
        id:1,
        name:"iphone",
        price:122,
    },
    {
        id:2,
        name:"ipad",
        price:200,
    },
    {
        id:3,
        name:"laptop",
        price:150,
    },
    {
        id:4,
        name:"tea",
        price:10,
    },

]
const searchProd =()=>{


    const prod = document.getElementById("prod") //input
    var filProducts = products.filter((p)=>{
        return prod.value>=p.price
    })
    console.log(filProducts)
}
