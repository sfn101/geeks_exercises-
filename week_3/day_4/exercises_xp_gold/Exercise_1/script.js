const selectElement = document.getElementById('genres');

console.log(selectElement.value);

const newOption = document.createElement('option');
newOption.value = 'classic';
newOption.textContent = 'Classic';

selectElement.appendChild(newOption);

newOption.selected = true;
