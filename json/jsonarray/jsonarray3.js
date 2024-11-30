var companies = [
    {
        name:"Google",
        location:"Mountain View",
        employees:[
            {
                name:"Sundar Pichai",
                age:47,
                salary:1000000,
                post:"CEO"
            },
            {
                name:"Larry Page",
                age:47,
                salary:1200000,
                post:"Founder"
            },
            {
                name:"Sergey Brin",
                age:46,
                salary:1100000,
                post:"Founder"
            }
        ]
    },
    {
        name:"Microsoft",
        location:"Redmond",
        employees:[
            {
                name:"Satya Nadella",
                age:52,
                salary:1500000,
                post:"CEO"
            },
            {
                name:"Bill Gates",
                age:64,
                salary:2000000,
                post:"Founder"
            }
        ]
    },
    {
        name:"Amazon",
        location:"Seattle",
        employees:[
            {
                name:"Jeff Bezos",
                age:56,
                salary:2500000,
                post:"Founder"
            },
            {
                name:"Andy Jassy",
                age:52,
                salary:2000000,
                post:"CEO"
            }
        ]
    }
    
]
//find google company

//const google = companies.find((comp)=>comp.name === "Google");
//const google = companies.find((comp)=>comp.name === "Google").employees;
const google = companies.find((comp)=>comp.name === "Google").employees.filter((emp)=>emp.post === "CEO");
console.log(google);