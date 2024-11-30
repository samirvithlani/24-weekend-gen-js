const contries = [
    {
        name:"India",
        capital:"New Delhi",
        states:[
            {
                name:"Guajarat",
                population:70000000,
                area:20000,
                aqi:200,

            },
            {
                name:"Maharashtra",
                population:100000000,
                area:30000,
                aqi:300
            },
            {
                name:"Rajasthan",
                population:80000000,
                area:40000,
                aqi:250
            }
        ]
    },
    {
        name:"USA",
        capital:"Washington DC",
        states:[
            {
                name:"California",
                population:40000000,
                area:50000,
                aqi:150
            },
            {
                name:"Texas",
                population:30000000,
                area:60000,
                aqi:100
            },
            {
                name:"Florida",
                population:20000000,
                area:70000,
                aqi:50
            }
        ]
    },
    {
        name:"Australia",
        capital:"Canberra",
        states:[
            {
                name:"New South Wales",
                population:15000000,
                area:80000,
                aqi:70
            },
            {
                name:"Victoria",
                population:12000000,
                area:90000,
                aqi:90
            }
        ]
    }
]
//find all states of India
//find all satte of usa which has population more than 25000000
//find all states of australia which has area less than 80000
//find all states of india which has aqi less than 250
//find all states of usa which has aqi less than 100

//for loop
var totalPopulation = 0;
for(let i=0;i<contries.length;i++){
    if(contries[i].name =="India"){
        for(let j=0;j<contries[i].states.length;j++){
            totalPopulation = totalPopulation + contries[i].states[j].population;
        }

    }
}
console.log(totalPopulation);

//reduce
// var data = [1,2,3,4,5];
// var total = data.reduce((sum,d)=>{
//     return sum+d;
// },0)
// console.log(total);

var totalPopulation1 =contries.find((con)=>con.name == "India").states.reduce((sum,st)=>sum+st.population,0);
console.log(totalPopulation1);