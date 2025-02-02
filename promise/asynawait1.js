const fetchData =()=>{


    var promise = new Promise((resolve,reject)=>{

        setTimeout(() => {
                resolve({data:"ok"})
        }, 3000);
    })
    return promise
}


const printData = async()=>{

    // var x = fetchData()
    // console.log(x)
    // x.then((data)=>{
    //     console.log(data)
    // })

    console.log("fetching data...")
    var x = await fetchData()
    console.log(x)

}
printData()