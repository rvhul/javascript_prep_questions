var boyName, girlName, yourName;

yourName = prompt('What is your name, beautiful?');

girlName = "Alice";

boyName = "Bob";

if (yourName === girlName) {
  document.write('Hello, ' + girlName);
} else if (yourName === boyName) {
  document.write('Hello, ' + boyName);
} else {
  document.write('Sorry, you were not invited.');
}
