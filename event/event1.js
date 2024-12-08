function checkClick(){

    console.log("button clicked...")
    //h1 tag...
    const text = document.getElementById("txt")//<h1>HI</h1>
    console.log(text.innerHTML)
    text.innerHTML = "Hello"
    text.style.color="red"
}