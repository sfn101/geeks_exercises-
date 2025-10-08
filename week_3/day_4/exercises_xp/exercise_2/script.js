// Exercise 2: Work with forms

// Retrieve the form and console.log it.
const form = document.querySelector('form');
console.log(form);

// Retrieve the inputs by their id and console.log them.
const firstNameInputId = document.getElementById('fname');
const lastNameInputId = document.getElementById('lname');
console.log(firstNameInputId);
console.log(lastNameInputId);

// Retrieve the inputs by their name attribute and console.log them.
const firstNameInputName = document.getElementsByName('firstname')[0];
const lastNameInputName = document.getElementsByName('lastname')[0];
console.log(firstNameInputName);
console.log(lastNameInputName);

// Add event listener for form submission
form.addEventListener('submit', function (event) {
  // event.preventDefault() prevents the default form submission action,
  // which is to reload the page. We prevent it to handle the submission
  // with JavaScript and update the page without a refresh.
  event.preventDefault();

  const firstNameValue = firstNameInputId.value;
  const lastNameValue = lastNameInputId.value;

  // Make sure that the input values are not empty
  if (firstNameValue.trim() !== '' && lastNameValue.trim() !== '') {
    const usersAnswerList = document.querySelector('.usersAnswer');

    // Clear previous entries
    usersAnswerList.innerHTML = '';

    // Create an li per input value
    const firstNameLi = document.createElement('li');
    firstNameLi.textContent = firstNameValue;

    const lastNameLi = document.createElement('li');
    lastNameLi.textContent = lastNameValue;

    // Append them to the <ul>
    usersAnswerList.appendChild(firstNameLi);
    usersAnswerList.appendChild(lastNameLi);
  } else {
    console.log('Please fill out both fields.');
  }
});
