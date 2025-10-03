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

let div = document.createElement('div');
div.style.display = 'flex';
div.style.flexDirection = 'row';
div.style.justifyContent = 'space-around';

allbooks.forEach((book) => {
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
  div.appendChild(bookDiv);
});

section.appendChild(div);