var examp=[2,3,4,45,8,5,9,3,1,6,4]
var count=0
for(let i=0;i<=examp.length;i++){
   // console.log(examp[i])
   if(examp[i] == examp[i+1]){
    count +=1
   }
}
 console.log(count)
