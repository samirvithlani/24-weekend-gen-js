window.addEventListener("DOMContentLoaded",()=>{
    console.log("dom loaded...")
})
window.addEventListener("copy",()=>{
    alert("dont copy...")
})
//paste cut...

window.addEventListener("resize",()=>{
    console.log(window.screenX + " "+window.screenY)
})

window.addEventListener("scroll",()=>{
    console.log(window.scrollX + " "+window.scrollY)
})
