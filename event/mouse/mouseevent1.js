
var colors = ["red","green","blue","yellow","black"]


const   changeColor =() =>{
    const box = document.getElementById("box") //<div>
    box.style.backgroundColor="red"
}
const   changeColor1 =() =>{
    const box = document.getElementById("box1") //<div>
    box.style.backgroundColor="red"
}
const   changeColor2 =() =>{

    //1st part how to genertate random no

    //var randomNo = Math.random(10)
    var randomNo = Math.floor(Math.random()*colors.length)
    //console.log(randomNo)
    //console.log(colors[randomNo])



    const box = document.getElementById("box2") //<div>
    box.style.backgroundColor=colors[randomNo]



}