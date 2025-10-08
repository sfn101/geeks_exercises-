// Exercise 2: Delete colors

function removecolor() {
  const colorSelect = document.getElementById('colorSelect');
  const selectedIndex = colorSelect.selectedIndex;

  if (selectedIndex !== -1) {
    colorSelect.remove(selectedIndex);
  }
}

const button = document.querySelector('input[type="button"]');
button.addEventListener('click', removecolor);
