const title = document.getElementById("title")
console.log("id...,title...",title.innerHTML)

const myClass = document.getElementsByClassName("myClass")[0]
console.log(myClass.innerHTML)

const code = document.getElementsByName("code")[0]
console.log(code.innerHTML)

const tag = document.getElementsByTagName("p")[0]
console.log(tag.innerHTML)


//for id =#
const title1= document.querySelector("#title")
console.log(title1.innerHTML)
//for class  = .
const myClass1 = document.querySelector(".myClass")
console.log(myClass.innerHTML)

//name = [name =code]
const code1 = document.querySelector("[name=code]")
console.log(code1.innerHTML)

//tag p
const tag1 = document.querySelector("p")
console.log(tag1.innerHTML)