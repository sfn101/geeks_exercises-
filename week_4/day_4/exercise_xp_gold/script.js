document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  const name = urlParams.get("name");
  const lastname = urlParams.get("lastname");

  const displaySection = document.getElementById("data-display");

  if (name && lastname) {
    displaySection.textContent = `Name: ${name}, Lastname: ${lastname}`;
  }
});
