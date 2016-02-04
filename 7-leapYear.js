process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});


function main(input){
  counter = 100;
  // result = true;

  while (counter >=0) {
    if ((input % 4 == 0)) {
      // result = true;
      console.log(input);
      input++;
      counter--;
    }
    else {
      input++;
    }
  }
}
