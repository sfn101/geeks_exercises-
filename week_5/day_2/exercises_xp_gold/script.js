//exercise 1

const ratings = "g";
const endpoint = "search";
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

async function displayGifs() {
  try {
    search = "funny dogs";
    limit = 5;
    offset = 0;
    const gifs = await fetchGifs(endpoint, search, ratings, limit, offset);

    let randomUrl = gifs[Math.floor(Math.random() * gifs.length)];
    randomUrl = randomUrl.images.fixed_height.url;
    const container = document.getElementById("gif-container");
    const img = document.createElement("img");
    img.src = randomUrl;
    container.appendChild(img);
  } catch (error) {
    console.error("Error displaying GIFs:", error);
  }
}

displayGifs();

//exercise 2

let resolveAfter2Seconds = function () {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
};

let resolveAfter1Second = function () {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
};

let sequentialStart = async function () {
  console.log("==SEQUENTIAL START==");
  const slow = await resolveAfter2Seconds();
  console.log(slow);
  const fast = await resolveAfter1Second();
  console.log(fast);
};

sequentialStart();

// ? question: what will be the output of the code above ?
// * answer: The output will be:
// * ==SEQUENTIAL START==
// * starting slow promise
// * slow promise is done
// * slow
// * starting fast promise
// * fast promise is done
// * fast
// * Explanation: The function sequentialStart is called, which logs '==SEQUENTIAL START=='. Then, it awaits the resolveAfter2Seconds function, which starts the slow promise and waits for 2 seconds before resolving. After that, it logs 'slow'. Next, it calls resolveAfter1Second, which starts the fast promise and waits for 1 second before resolving. Finally, it logs 'fast'. The total time taken will be approximately 3 seconds.

//exercise 3

let resolveAfter2Seconds = function () {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
};

let resolveAfter1Second = function () {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
};

let concurrentStart = async function () {
  console.log("==CONCURRENT START with await==");
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();
  console.log(await slow);
  console.log(await fast);
};

setTimeout(concurrentStart, 4000);
// ? question: what will be the output of the code above ?
// * answer: The output will be:
// * ==CONCURRENT START with await==
// * starting slow promise
// * starting fast promise
// * fast promise is done
// * fast
// * slow promise is done
// * slow
// * Explanation: The function concurrentStart is called after a 4-second delay. It logs '==CONCURRENT START with await=='. Then, it calls resolveAfter2Seconds and resolveAfter1Second without awaiting them immediately, which starts both promises concurrently. The fast promise resolves first after 1 second, logging 'fast promise is done' and then 'fast'. After another second (total of 2 seconds), the slow promise resolves, logging 'slow promise is done' and then 'slow'. The total time taken will be approximately 2 seconds after the initial 4-second delay.

//exercise 4
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async () => {
  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    if (!responses.every((response) => response.ok)) {
      throw new Error(`Network response was not ok`);
    }
    const [users, posts, albums] = await Promise.all(
      responses.map((response) => response.json())
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (error) {
    console.log("ooooops");
    console.error("Error fetching data:", error);
  }
};

getData();
