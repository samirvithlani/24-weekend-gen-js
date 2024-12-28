const submitHandler = (event)=>{
    //function
    event.preventDefault() // default ... action prevent...
    console.log("submit handler...")

    const nameOutput= document.getElementById("nameOutput")
    const ageOutput = document.getElementById("ageOutput")

    const name = document.getElementById("name") //<input/>
    //console.log(name.value)
    nameOutput.innerHTML = name.value
    const age = document.getElementById("age")
    //console.log(age.value)
    ageOutput.innerHTML = age.value
}