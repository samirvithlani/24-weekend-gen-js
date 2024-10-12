const data = [
  ["Monday", 12],
  ["Tuesday", 13],
  ["Wednesdat", 14],
  ["Thursday", 15],
  ["Friday", 20],
  ["Saturday", 23],
  ["Sunday", 20],
];

//monday ="MONDAY" : 12 *2  = 24 =["MONDAY",24]



const updatedData = data.map((d)=>{
   return [d[0].toUpperCase(),d[1]*2]
})
console.log(updatedData)















