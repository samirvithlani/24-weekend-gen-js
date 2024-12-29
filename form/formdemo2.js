const handleSubmit = (event) => {
  event.preventDefault();
  const name = document.getElementById("name"); //<input>
  console.log(name.value);

  const gender = document.getElementsByName("gender"); //<input><input> //array
  ///    console.log(gender)

  for (let i = 0; i < gender.length; i++) {
    //gender[i] 1st<input>
    if (gender[i].checked) {
        console.log(gender[i].value)
    }
  }

  const hobbies = document.getElementsByName("hobbies")
  for(let i=0;i<hobbies.length;i++){

    if(hobbies[i].checked){
        console.log(hobbies[i].value)
    }
  }

};
