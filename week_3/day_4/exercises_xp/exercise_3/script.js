let allBoldItems;

function getBoldItems() {
  allBoldItems = document.querySelectorAll('p strong');
}

function highlight() {
  getBoldItems();
  for (const boldItem of allBoldItems) {
    boldItem.style.color = 'blue';
  }
}

function returnItemsToDefault() {
  for (const boldItem of allBoldItems) {
    boldItem.style.color = 'black';
  }
}

const paragraph = document.querySelector('p');

paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);
