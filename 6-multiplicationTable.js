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

