var sname = "royal"
var revName = ""

for(let i=sname.length-1;i>=0;i--){
    //"" = ""+l ="l"
    //l = l+a = "la"
    //la = la+y = "lay"
    //lay = lay+o = "layo"
    //layo = layo+r = "layor"
    revName = revName + sname[i]
}

console.log(revName)

//get name from promt and check it is palindrome or not..