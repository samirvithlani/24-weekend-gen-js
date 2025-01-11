var employees = [
    {
        id:1,
        name:"ram",
        age:23,
        status:true
    },
    {
        id:2,
        name:"shyam",
        age:24,
        status:true
    },
    {
        id:3,
        name:"seeta",
        age:22,
        status:false
    },
]


window.addEventListener("DOMContentLoaded",()=>{
for(let i=0;i<employees.length;i++){
    createRow(employees[i])
}
})
const createRow =(employee)=>{

    const tbody = document.getElementById("tbody")
    const tr = document.createElement("tr");
    const idTd = document.createElement("td")
    idTd.innerHTML=employee.id //1//2//3

    const nameTd = document.createElement("td")
    nameTd.innerHTML = employee.name

    const ageTd = document.createElement("td")
    ageTd.innerHTML = employee.age

    const statusTd = document.createElement("td")
    //statusTd.innerHTML = employees[i].status
    statusTd.innerHTML = employee.status == true? "Active":"Not Active"

    tr.appendChild(idTd)
    tr.appendChild(nameTd)
    tr.appendChild(ageTd)
    tr.appendChild(statusTd)
    tbody.appendChild(tr)
}