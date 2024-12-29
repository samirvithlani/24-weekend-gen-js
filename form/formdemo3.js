const handleSubmit = (event)=>{

    event.preventDefault();
    const name = document.getElementById("name") //<input>
    const nameOutput = document.getElementById("nameOutput")
    if(name.value.trim().length<=0){
        //console.log("name is required*")
        nameOutput.innerHTML = "name is required*"
        nameOutput.style.color="red"
    }
    else{
        nameOutput.innerHTML = ""
    }





}