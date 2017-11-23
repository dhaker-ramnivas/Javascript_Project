var calculate=(x)=>{
console.log("2222222222222222222");
  return x*x;
}
var calculateAfterTwoSec=(x)=>{
return x*x*x;
}


var find=async ()=>{
  console.log("started");  //1

  var value=await calculateAfterTwoSec(5);

  console.log(calculate(10777777777777777777777777777777777777777777777777777)); //2
  console.log("in mid");//3
  console.log(value);
  return value; //4
}

find().then(val=>{
  console.log(val)
})
