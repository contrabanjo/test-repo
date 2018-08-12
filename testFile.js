var testVariable = 1;
var getTestVariable = function(){
  if (testVariable < 0){
    console.log("No such variable");
  } else {
    console.log(testVariable);
  }
}