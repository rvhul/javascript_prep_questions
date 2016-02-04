var i, j, n, ref, ref1, sum, value;

n = prompt('Gimme your digits girl');

sum = 0;

value = parseInt(n);

for (i = j = ref = i, ref1 = value; ref <= ref1 ? j <= ref1 : j >= ref1; i = ref <= ref1 ? ++j : --j) {
  if (i % 3 === 0 && i % 5 === 0) {
    sum = sum + i;
  }
}

document.write('The sum of your input = ' + sum);
