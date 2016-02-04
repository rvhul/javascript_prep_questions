process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});


function main(input){
  mod_input = input.split(" ");
  newArray = [];
  for (i = 0; i<mod_input.length; i++){
    first_word = mod_input[i];
    first_word = first_word.split("").reverse().join("");
    newArray.push(first_word);
  }
  string = newArray.join(" ");
  console.log(string);
}
