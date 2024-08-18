let no1 = 100 //block level scope
console.log("value of no1 outside of block.. ::",no1)

{
    console.log("value of no1 inside of block.. ::",no1)
    let no2 = 200 //block level scope
    console.log("value of no2 inside of block.. ::",no2)
}
//console.log("value of no2 outside of block.. ::",no2)
{

    let x =100
    console.log("value of x inside of block.. ::",x)
    //console.log("value of no2 inside of block.. ::",no2)
    var no3 = 300 //block level scope   
}
console.log(no3)


let q1 = 100
q1 = 200 //reassign
console.log("value of q1 ::",q1)

// let p1 = 120
// let p1 = 220 //redeclare


// {
//     //block 3
//     let z = 111
//     console.log("value of z inside of block.. ::",z)//
// }

// {
//     //block 4
//     let z = 222
//     console.log("value of z inside of block.. ::",z)//
// }

{
    //block 3

    var z =100
    console.log("value of z inside of block.. ::",z)//
}

{
    //block 4
    let z = 200
    console.log("value of z inside of block.. ::",z)//
}