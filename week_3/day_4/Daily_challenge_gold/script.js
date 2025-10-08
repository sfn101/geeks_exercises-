// Daily challenge : Show only the letters
const letterInput = document.getElementById('letterInput');

letterInput.addEventListener('input', event => {
  // This regular expression /[^a-zA-Z]/g finds any character that is not a letter.
  const regex = /[^a-zA-Z]/g;
  event.target.value = event.target.value.replace(regex, '');
});
