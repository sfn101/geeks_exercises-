const rootElement = document.getElementById('root');

let shoppingList = [];

const form = document.createElement('form');
const itemInput = document.createElement('input');
itemInput.setAttribute('type', 'text');
itemInput.setAttribute('placeholder', 'What do you need to buy?');

const addButton = document.createElement('button');
addButton.setAttribute('type', 'submit');
addButton.textContent = 'AddItem';

form.appendChild(itemInput);
form.appendChild(addButton);
rootElement.appendChild(form);

const clearAllButton = document.createElement('button');
clearAllButton.textContent = 'ClearAll';
rootElement.appendChild(clearAllButton);

function addItem(event) {
  event.preventDefault();
  const newItem = itemInput.value;

  if (newItem.trim() !== '') {
    shoppingList.push(newItem);
    itemInput.value = '';
    console.log(shoppingList);
  }
}

function clearAll() {
  shoppingList = [];
  console.log('Shopping list has been cleared.');
}

form.addEventListener('submit', addItem);
clearAllButton.addEventListener('click', clearAll);

const listElement = document.createElement('ul');
rootElement.appendChild(listElement);

function renderList() {
  listElement.innerHTML = '';
  shoppingList.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    listElement.appendChild(li);
  });
}

form.addEventListener('submit', () => {
  renderList();
});

clearAllButton.addEventListener('click', () => {
  renderList();
});
