// Sunrise API

const form = document.getElementById("sunriseForm");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  resultsDiv.innerHTML = "Loading...";

  const lat1 = document.getElementById("lat1").value;
  const lng1 = document.getElementById("lng1").value;
  const lat2 = document.getElementById("lat2").value;
  const lng2 = document.getElementById("lng2").value;

  const url1 = `https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lng1}`;
  const url2 = `https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng2}`;

  try {
    const promise1 = fetch(url1).then((response) => response.json());
    const promise2 = fetch(url2).then((response) => response.json());

    const results = await Promise.all([promise1, promise2]);

    const sunrise1 = results[0].results.sunrise;
    const sunrise2 = results[1].results.sunrise;

    resultsDiv.innerHTML = `
            <p>City 1 Sunrise: ${sunrise1} (UTC)</p>
            <p>City 2 Sunrise: ${sunrise2} (UTC)</p>
        `;
  } catch (error) {
    resultsDiv.innerHTML = "Error fetching data. Please check the coordinates.";
  }
});
