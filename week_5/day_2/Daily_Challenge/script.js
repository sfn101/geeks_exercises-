//exercise 1

const ratings = "g";
const endpoint = "random";
let search = "cats";

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

const queryBuilder = () => {
  const query = `${endpoint}?tag=${search}&rating=${ratings}`;
  // console.log(query);
  return query;
};

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

    const url = gifs.images.fixed_height.url;
    const container = document.getElementById("gif-container");
    const deleteBTN = document.createElement("button");
    deleteBTN.textContent = "Delete";
    deleteBTN.addEventListener("click", () => {
      container.removeChild(card);
    });
    const img = document.createElement("img");
    img.src = url;
    const card = document.createElement("div");
    card.className = "gif-card";
    card.appendChild(img);
    card.appendChild(deleteBTN);
    container.appendChild(card);
  } catch (error) {
    console.error("Error displaying GIFs:", error);
  }
}
searchInput();
displayGifs();
