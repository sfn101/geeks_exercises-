const div = document.getElementById('navBar');
div.setAttribute('id', 'socialNetworkNavigation');

const li = document.createElement('li');
const text = document.createTextNode('Logout');
li.appendChild(text);

const ul = div.querySelector('ul');
ul.appendChild(li);

console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);
