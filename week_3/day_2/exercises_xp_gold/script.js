// Exercise 1 : is_Blank
const isBlank = str => {
  return str.length === 0;
};

console.log('Exercise 1: is_Blank');
console.log(isBlank(''));
console.log(isBlank('abc'));

// Exercise 2 : Abbrev_name
const abbrevName = name => {
  const nameArray = name.split(' ');
  return nameArray[0] + ' ' + nameArray[1].charAt(0) + '.';
};

console.log('Exercise 2: Abbrev_name');
console.log(abbrevName('Robin Singh'));

// Exercise 3 : SwapCase
const swapCase = str => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
};

console.log('Exercise 3: SwapCase');
console.log(swapCase('The Quick Brown Fox'));

// Exercise 4 : Omnipresent value
const isOmnipresent = (arr, val) => {
  return arr.every(subArray => subArray.includes(val));
};

console.log('Exercise 4: Omnipresent value');
console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    1
  )
);
console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    6
  )
);

// Exercise 5 : Red table
let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}
