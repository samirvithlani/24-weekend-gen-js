const btn = document.getElementById("btn")
btn.addEventListener("click",function(){
    //console.log("button clicked..")
    btn.innerHTML = "button clicked"
    btn.disabled = true
})
btn.addEventListener("mouseenter",()=>{

    btn.style.backgroundColor="green"

})

btn.addEventListener("mouseleave",()=>{

    btn.style.backgroundColor="yellow"

})