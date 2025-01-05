// window.addEventListener("DOMContentLoaded",()=>{

//     const root = document.querySelector("#root") //<div>

//     const h1Tag = document.createElement("h1")
//     h1Tag.innerHTML = "Hello"

//     root.appendChild(h1Tag) //<div><h1>Hello</h1></div>

// })

const root = document.querySelector("#root"); //<div>

const h1Tag = document.createElement("h1");
h1Tag.innerHTML = "Hello";

const nameH1 = document.createElement("h1")
nameH1.innerHTML="Ram"
nameH1.style.color="red"

root.appendChild(h1Tag); //<div><h1>Hello</h1></div>
root.appendChild(nameH1)


var users = ["ram","shyam","seeta","geeta","hari","ok"]

for(let i=0;i<users.length;i++){

    const userh2 = document.createElement("h2")
    userh2.innerHTML=users[i] // ram // shyam seeta
    root.appendChild(userh2)

}