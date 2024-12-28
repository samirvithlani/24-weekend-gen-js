const diceData = [1,2,3,4,5,6]
const roll = ()=>{


    const dice = document.getElementById("dice") //<dice>
    const randomIndex = Math.floor(Math.random()*diceData.length)
    //dice.innerHTML = "<pre>"+ diceData[randomIndex]+"</pre>"
    if(randomIndex==0){
        dice.innerHTML = "<pre>*</pre>"
    }
    else if(randomIndex==1){
        dice.innerHTML = `<pre>*  *</pre>`
    }
    else if(randomIndex==2){
        alert("here..")
        dice.innerHTML = `<pre> *   * \n*</pre>`
    }
    else if(randomIndex==3){
        dice.innerHTML = `<pre>    * * 
                                   * * </pre>`
    }
    else if(randomIndex==4){
        dice.innerHTML = `<pre> *   *
                                  * 
                                *   *</pre>`
    }
    else if(randomIndex==5){
        dice.innerHTML = `<pre>*  *</pre>`
    }
    

}