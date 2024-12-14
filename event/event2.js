const getData =()=>{
    //console.log("function called....")
    const data = document.getElementById("data") //<input>
    //console.log(data.value)

    const dataOutput = document.getElementById("dataOutput")//<span>
    //dataOutput.innerHTML = data.value 
    if(data.value.length>3){
        dataOutput.style.color = "green"
        dataOutput.innerHTML = data.value
    }
    else{
        dataOutput.style.color = "red"
        dataOutput.innerHTML = data.value
    }
}