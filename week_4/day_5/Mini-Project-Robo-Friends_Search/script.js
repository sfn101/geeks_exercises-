// PART I: Robot data array
const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

// Get references to DOM elements
const robotContainer = document.getElementById("robot-container");
const searchBox = document.getElementById("search-box");

// Function to display robots on the page
function displayRobots(robotList) {
  // Clear any existing content
  robotContainer.innerHTML = "";

  // Create and append a card for each robot in the provided list
  robotList.forEach((robot) => {
    const card = document.createElement("div");
    card.classList.add("robot-card");

    card.innerHTML = `
            <div class="img-container">
                <img src="${robot.image}" alt="A picture of ${robot.name}">
            </div>
            <h2>${robot.name}</h2>
            <p>${robot.email}</p>
        `;

    robotContainer.appendChild(card);
  });
}

// PART II: The filter function
function handleSearch() {
  const searchTerm = searchBox.value.toLowerCase();

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchTerm);
  });

  displayRobots(filteredRobots);
}

// Add an event listener to the search box to filter on input
searchBox.addEventListener("input", handleSearch);

// Initial display of all robots when the page loads
displayRobots(robots);
