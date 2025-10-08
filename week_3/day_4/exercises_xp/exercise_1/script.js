const h1 = document.querySelector('h1');
console.log(h1);

const article = document.querySelector('article');

article.lastElementChild.remove();

const h2 = document.querySelector('h2');
h2.addEventListener('click', () => {
  h2.style.backgroundColor = 'red';
});

const h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
  h3.style.display = 'none';
});

const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);

const allP = document.querySelectorAll('p');
button.addEventListener('click', () => {
  allP.forEach(p => {
    p.style.fontWeight = 'bold';
  });
});

h1.addEventListener('mouseover', () => {
  h1.style.fontSize = 'random(0,100)px';
});

allP[1].addEventListener('click', () => {
  for (let i = 100; i > 0; i--) {
    allP[1].style.transition = 'opacity 0.5s ease-in-out';
    allP[1].style.opacity = i * 0.1;
  }
});
