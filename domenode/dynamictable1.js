var employees = [
    {
        id:1,
        name:"ram",
        age:23,
        status:true
    },
    {
        id:2,
        name:"kunj",
        age:24,
        status:true
    },
    {
        id:3,
        name:"kunal",
        age:22,
        status:false
    },
    
]


window.addEventListener("DOMContentLoaded",()=>{
for(let i=0;i<employees.length;i++){
    createRow(employees[i])
}
})
const sortByAge =()=>{
    const tbody  = document.getElementById("tbody")
    tbody.innerHTML=""
    employees = employees.sort((a,b)=>a.age-b.age)
    
    for(let i=0;i<employees.length;i++){
        createRow(employees[i])
    }
    
}
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


    const actionTd = document.createElement("td")

    const detailButton = document.createElement("button")
    detailButton.innerHTML="Detail"
    actionTd.appendChild(detailButton)
    detailButton.className="btn btn-info"
    detailButton.addEventListener("click",()=>{
        alert(employee.name)
    })

    const deleteButton = document.createElement("button")
    deleteButton.innerHTML="Delete"
    deleteButton.className="btn btn-danger"
    deleteButton.style.marginLeft="10px"
    deleteButton.addEventListener("click",()=>{
        tr.remove()
    })
    
    actionTd.appendChild(deleteButton)

    tr.appendChild(idTd)
    tr.appendChild(nameTd)
    tr.appendChild(ageTd)
    tr.appendChild(statusTd)
    tr.appendChild(actionTd)

    tbody.appendChild(tr)
}

// ... spread operator..
const originalEmployees = [...employees]; // Preserve the original list of employees

const searchUser = (event) => {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = ""; // Clear the table
    const txt = document.querySelector("#txt");

    if (event.key === "Backspace") {
        
        employees = [...originalEmployees]; // Reset to original list
    }

    if (txt.value !== "") {
        employees = originalEmployees.filter((emp) => {
            return emp.name.toLowerCase().includes(txt.value);
        });
    } else {
        employees = [...originalEmployees]; // Reset if input is cleared
    }

    // Display filtered records
    for (let i = 0; i < employees.length; i++) {
        createRow(employees[i]);
    }
};