function checkClick(){

    console.log("button clicked...")
    //h1 tag...
    const text = document.getElementById("txt")//<h1>HI</h1>
    console.log(text.innerHTML)
    text.innerHTML = "Hello"
    text.style.color="red"
}

const changeLink =()=>{

    const link = document.getElementById("link") //<a>
    console.log(link)
    link.href = "https://www.hotstar.com"
    link.innerHTML="Hotstar"

}
const changeLink1 =()=>{

    const link = document.getElementById("link") //<a>
    console.log(link)


    setTimeout(()=>{
        link.href = "https://www.hotstar.com"
        link.innerHTML="Hotstar"
    },3000)


    

}