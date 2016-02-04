var i, j, n, ref, result;

n = prompt('Gimme your digits girl');

result = 0;

for (i = 1; i <= n; i++) {
  result = result + i;
}
// ^ THIS IS BASICALLY THIS
// for (i = 1; i <= n; i++) {
//   result = result + i;
// }

document.write('The sum of your input = ' + result);
