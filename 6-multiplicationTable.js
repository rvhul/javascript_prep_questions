process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});


function main(input){
  i = 1
  while (i<=12) {
  table = input*i;
  console.log( input +" x "+ i + " = " + table);
  i++;
}
}


// FOR LOOP EXPLAINED:
// i = 0 (this is an empty variable only for use BY THE LOOP ITSELF, it will self destruct after the loop is satisfied)
// while (i<=12) { (this means that while i is less than or equal to 12 <DO THIS IN THE CURLY BRACES)
// table = input * i (THIS IS ANOTHER EMPTY VARIABLE CALLED TABLE WHICH IS set to equal the user input multiplied by the other empty variable i which at this point in the loop is valued at 0)
// console.log (print something)
// i++ (this is the end of the first iteration of the loop and the value of i will now increase to 1 AND THE ENTIRE PROCESS WILL BEGIN AGAIN)
