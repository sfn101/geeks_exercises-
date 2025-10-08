// Part I
// setTimeout(() => {
//   alert("Hello World");
// }, 2000);

// Part II
// setTimeout(() => {
//   const container = document.getElementById("container");
//   const p = document.createElement("p");
//   p.textContent = "Hello World";
//   container.appendChild(p);
// }, 2000);

// Part III
const container = document.getElementById('container');
const clearButton = document.getElementById('clear');

function addParagraph() {
  const p = document.createElement('p');
  p.textContent = 'Hello World';
  container.appendChild(p);

  if (container.getElementsByTagName('p').length >= 5) {
    clearInterval(intervalID);
  }
}

const intervalID = setInterval(addParagraph, 2000);

clearButton.addEventListener('click', () => {
  clearInterval(intervalID);
});
