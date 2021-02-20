const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// Descending order
const outEl = document.querySelector('#integers');
const sorted = integers.sort(function (a, b) {
  return a - b;
});
outEl.innerHTML += '<h2>Descending Order</h2>';
outEl.innerHTML += sorted.join(' ');

// Greater than 19
outEl.innerHTML += '<h2>Integers greater than 19</h2>';
const filter = integers.filter((integer) => integer > 19);
outEl.innerHTML += filter.join(' ');

// Multiply each remaining number by 1.5 and then subtract 1
outEl.innerHTML += '<h2>Multiply and subtract leftover numbers</h2>';
const changedNumber = filter.map((x) => x * 1.5 - 1);
outEl.innerHTML += changedNumber.join(' ');
