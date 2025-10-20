let ratings = "g";
let endpoint = "search";
let search = "cats";
let limit = 10;
let offset = 2;

async function fetchGifs(
  endpoint = "search",
  search = "cats",
  ratings = "g",
  limit = "",
  offset = ""
) {
  const baseUrl = "https://api.giphy.com/v1/gifs";
  const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
  try {
    const response = await fetch(
      `${baseUrl}/${endpoint}?api_key=${apiKey}&q=${search}&rating=${ratings}&limit=${limit}&offset=${offset}`
    );
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

// exercise 1
fetchGifs(endpoint, search, ratings).then((gifs) => {
  console.log(gifs);
});

// exercise 2
// ? Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
search = "Sun";
fetchGifs(endpoint, search, ratings, limit, offset).then((gifs) => {
  console.log(gifs);
});

// exercise 3
async function starWarsFetch() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    if (!response.ok) {
      throw new Error(
        `Network response was not ok with status: ${response.status}`
      );
    }

    const objectStarWars = await response.json();
    console.log(objectStarWars.result);
  } catch (error) {
    console.error("Error fetching starship:", error);
  }
}

starWarsFetch();

// exercise 4

// ? Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();

// The outcome will be:
// calling
// (after 2 seconds)
// resolved

// * because the function resolveAfter2Seconds returns a Promise that resolves after 2 seconds, the asyncCall function will log "calling" immediately, then wait for the Promise to resolve before logging "resolved".
