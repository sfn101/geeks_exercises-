//exercise 1

const ratings = "g";
const endpoint = "search";
let search = "cats";
let limit = 10;
let offset = 0;

function searchInput() {
  const gifForm = document.getElementById("gif-form");
  const deleteAll = document.getElementById("delete-all");
  deleteAll.addEventListener("click", () => {
    const container = document.getElementById("gif-container");
    container.innerHTML = "";
    gifForm.elements["search-input"].value = "";
  });
  gifForm.addEventListener("submit", (event) => {
    event.preventDefault();
    search = gifForm.elements["search-input"].value;
    console.log(search);
    offset = 0;
    displayGifs();
  });
}

function pagenation() {
  const resultsPerPage = document.getElementById("resultPerPage");
  resultsPerPage.addEventListener("change", () => {
    limit = Number.parseInt(resultsPerPage.value, 10);
    offset = 0;
    displayGifs();
  });
  const nextpage = document.getElementById("next-page");
  const prevpage = document.getElementById("prev-page");
  nextpage.addEventListener("click", () => {
    offset += Number.parseInt(limit, 10);
    displayGifs();
  });
  prevpage.addEventListener("click", () => {
    if (offset >= Number.parseInt(limit, 10)) {
      offset -= Number.parseInt(limit, 10);
      displayGifs();
    }
  });
}
const queryBuilder = () => {
  const query = `${endpoint}?q=${search}&rating=${ratings}&limit=${limit}&offset=${offset}`;
  console.log(query);
  return query;
};

queryBuilder();
async function fetchGifs(query) {
  const baseUrl = "https://api.giphy.com/v1/gifs";
  const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
  try {
    const response = await fetch(`${baseUrl}/${query}&api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error(
        `Network response was not ok with status: ${response.status}`
      );
    }
    const data = await response.json();
    // console.log(data.data);
    return data.data;
  } catch (error) {
    console.error("Error fetching GIFs:", error);
  }
}

async function displayGifs() {
  try {
    const gifs = await fetchGifs(queryBuilder());

    const urls = gifs.map((gif) => gif.images.fixed_height.url);
    const container = document.getElementById("gif-container");
    container.innerHTML = ""; // Clear previous results
    for (const url of urls) {
      const img = document.createElement("img");
      img.src = url;
      container.appendChild(img);
    }
  } catch (error) {
    console.error("Error displaying GIFs:", error);
  }
}
searchInput();
pagenation();
displayGifs();
