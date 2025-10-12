// Form JSON
const userForm = document.getElementById("userForm");
const outputDiv = document.getElementById("output");

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;

  const formData = {
    name: firstName,
    lastname: lastName,
  };

  outputDiv.textContent = JSON.stringify(formData);
});
