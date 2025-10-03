/* eslint no-console: 0 */

const div = document.getElementById('container');

console.log(div);

const lists = document.getElementsByClassName('list');

const secondChild = lists[0].children[1];

secondChild.textContent = 'Richard';

lists[1].removeChild(lists[1].children[1]);

for (let i = 0; i < lists.length; i++) {
  lists[i].children[0].textContent = 'soufiane';
}

for (const ul of lists) {
  ul.classList.add('student_list');
}

lists[0].classList.add('university', 'attendance');

div.style.backgroundColor = 'lightblue';
div.style.padding = '10px';

for (const ul of lists) {
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