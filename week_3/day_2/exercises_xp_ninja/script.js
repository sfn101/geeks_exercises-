// Exercise 1: Random Number
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`The random number is: ${randomNumber}`);

for (let i = 0; i <= randomNumber; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Exercise 2: Capitalized letters
const capitalize = str => {
  let evenCaps = '';
  let oddCaps = '';

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      // even index
      evenCaps += str[i].toUpperCase();
      oddCaps += str[i].toLowerCase();
    } else {
      // odd index
      evenCaps += str[i].toLowerCase();
      oddCaps += str[i].toUpperCase();
    }
  }
  return [evenCaps, oddCaps];
};

console.log(capitalize('abcdef'));

// Exercise 3 : Is palindrome?
const isPalindrome = str => {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
};

console.log(isPalindrome('madam'));
console.log(isPalindrome('hello'));

// Exercise 4 : Biggest Number
const biggestNumberInArray = arrayNumber => {
  if (arrayNumber.length === 0) {
    return 0;
  }

  let numbersOnly = [];
  for (let item of arrayNumber) {
    if (typeof item === 'number' && !isNaN(item)) {
      numbersOnly.push(item);
    }
  }

  if (numbersOnly.length === 0) {
    return 0;
  }

  let biggest = numbersOnly[0];
  for (let i = 1; i < numbersOnly.length; i++) {
    if (numbersOnly[i] > biggest) {
      biggest = numbersOnly[i];
    }
  }
  return biggest;
};

const array = [-1, 0, 3, 100, 99, 2, 99];
const array2 = ['a', 3, 4, 2];
const array3 = [];
console.log(biggestNumberInArray(array));
console.log(biggestNumberInArray(array2));
console.log(biggestNumberInArray(array3));

// Exercise 5: Unique Elements
const getUniqueElements = arr => {
  const uniqueArray = [];
  for (let item of arr) {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  }
  return uniqueArray;
};

const list = [1, 2, 3, 3, 3, 3, 4, 5];
console.log(getUniqueElements(list));

// Exercise 6 : Calendar
const createCalendar = (year, month) => {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Create header
  const headerRow = document.createElement('tr');
  const days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  days.forEach(day => {
    const th = document.createElement('th');
    th.textContent = day;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Calendar Body
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  const daysInMonth = lastDay.getDate();

  let startDay = firstDay.getDay(); // Sunday is 0, Monday is 1
  if (startDay === 0) {
    startDay = 7; // Adjust Sunday to be the 7th day
  }

  let date = 1;
  let currentRow = document.createElement('tr');

  // Add empty cells for the beginning of the month
  for (let i = 1; i < startDay; i++) {
    const td = document.createElement('td');
    currentRow.appendChild(td);
  }

  while (date <= daysInMonth) {
    for (let i = startDay; i <= 7 && date <= daysInMonth; i++) {
      const td = document.createElement('td');
      td.textContent = date;
      currentRow.appendChild(td);
      date++;
    }
    tbody.appendChild(currentRow);
    currentRow = document.createElement('tr');
    startDay = 1; // Reset for subsequent weeks
  }

  table.appendChild(tbody);
  document.body.appendChild(table);
};

createCalendar(2012, 9);
