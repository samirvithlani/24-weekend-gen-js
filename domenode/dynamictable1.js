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

const tbody = document.getElementById("tbody")

for(let i=0;i<employees.length;i++){

    const tr = document.createElement("tr");
    const idTd = document.createElement("td")
    idTd.innerHTML=employees[i].id //1//2//3

    const nameTd = document.createElement("td")
    nameTd.innerHTML = employees[i].name

    const ageTd = document.createElement("td")
    ageTd.innerHTML = employees[i].age

    const statusTd = document.createElement("td")
    //statusTd.innerHTML = employees[i].status
    statusTd.innerHTML = employees[i].status == true? "Active":"Not Active"

    tr.appendChild(idTd)
    tr.appendChild(nameTd)
    tr.appendChild(ageTd)
    tr.appendChild(statusTd)
    tbody.appendChild(tr)
}