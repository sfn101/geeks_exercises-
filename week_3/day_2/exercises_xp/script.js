/* eslint no-console: 0 */

// ========== SCRIPT.JS (EXERCISE 5) ==========
// Fixed variable names to avoid conflicts: div -> containerDiv, lists -> listElements

const containerDiv = document.getElementById('container');

console.log(containerDiv);

const listElements = document.getElementsByClassName('list');

const secondChild = listElements[0].children[1];

secondChild.textContent = 'Richard';

listElements[1].removeChild(listElements[1].children[1]);

for (let i = 0; i < listElements.length; i++) {
  listElements[i].children[0].textContent = 'soufiane';
}

for (const ul of listElements) {
  ul.classList.add('student_list');
}

listElements[0].classList.add('university', 'attendance');

containerDiv.style.backgroundColor = 'lightblue';
containerDiv.style.padding = '10px';

for (const ul of listElements) {
  for (const li of ul.children) {
    if (li.textContent.includes('Dan')) {
      li.style.display = 'none';
    }
    if (li.textContent.includes('Richard')) {
      li.style.border = '3px solid black';
    }
  }
}
const body = document.body;
body.style.fontFamily = 'Arial, sans-serif';

// ========== SCRIPT2.JS (EXERCISE 6) ==========
// Fixed variable names to avoid conflicts: div -> navDiv, li -> logoutLi, ul -> navUl

const navDiv = document.getElementById('navBar');
navDiv.setAttribute('id', 'socialNetworkNavigation');

const logoutLi = document.createElement('li');
const text = document.createTextNode('Logout');
logoutLi.appendChild(text);

const navUl = navDiv.querySelector('ul');
navUl.appendChild(logoutLi);

console.log(navUl.firstElementChild.textContent);
console.log(navUl.lastElementChild.textContent);

// ========== SCRIPT3.JS (EXERCISE 7) ==========
// Fixed variable names to avoid conflicts: div -> booksDiv

let allbooks = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    image: 'https://m.media-amazon.com/images/I/81af+MCATTL.jpg',
    alreadyRead: true,
  },
  {
    title: '1984',
    author: 'George Orwell',
    image: 'https://images.booksense.com/images/333/869/9781328869333.jpg',
    alreadyRead: false,
  },
];

const section = document.querySelector('.listBooks');

let booksDiv = document.createElement('div');
booksDiv.style.display = 'flex';
booksDiv.style.flexDirection = 'row';
booksDiv.style.justifyContent = 'space-around';

allbooks.forEach(book => {
  let bookDiv = document.createElement('div');
  let title = document.createElement('h3');
  title.textContent = book.title;
  let author = document.createElement('p');
  author.textContent = book.author;
  let img = document.createElement('img');
  img.src = book.image;
  img.style.width = '100px';
  if (book.alreadyRead) {
    title.style.color = 'red';
    author.style.color = 'red';
  }
  bookDiv.appendChild(title);
  bookDiv.appendChild(author);
  bookDiv.appendChild(img);
  booksDiv.appendChild(bookDiv);
});

section.appendChild(booksDiv);
