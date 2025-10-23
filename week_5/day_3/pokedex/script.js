document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-btn");
  const searchInput = document.getElementById("pokemon-search");
  const prevBtn = document.getElementById("prev-btn");
  const randomBtn = document.getElementById("random-btn");
  const nextBtn = document.getElementById("next-btn");
  const loading = document.getElementById("loading");
  const pokemonName = document.getElementById("pokemon-name");
  const pokemonId = document.getElementById("pokemon-id");
  const pokemonHeight = document.getElementById("pokemon-height");
  const pokemonWeight = document.getElementById("pokemon-weight");
  const pokemonImage = document.getElementById("pokemon-image");
  const pokemonTypes = document.getElementById("pokemon-types");
  const pokemonStats = document.getElementById("pokemon-stats");
  const pokemonAbilities = document.getElementById("pokemon-abilities");

  let currentPokemonId = null;

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
      fetchPokemon(query);
    }
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const query = searchInput.value.trim().toLowerCase();
      if (query) {
        fetchPokemon(query);
      }
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPokemonId && currentPokemonId > 1) {
      fetchPokemonById(currentPokemonId - 1);
    }
  });

  randomBtn.addEventListener("click", fetchRandomPokemon);

  nextBtn.addEventListener("click", () => {
    if (currentPokemonId && currentPokemonId < 1010) {
      fetchPokemonById(currentPokemonId + 1);
    }
  });

  async function fetchPokemon(query) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${query}`
      );
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      const data = await response.json();
      displayPokemon(data);
    } catch (error) {
      alert("Pokemon not found. Please try another name or ID.");
      console.error(error);
    }
  }

  async function fetchPokemonById(id) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      const data = await response.json();
      displayPokemon(data);
    } catch (error) {
      alert("Pokemon not found.");
      console.error(error);
    }
  }
  fetchPokemonById(1); // Load the first Pokemon on page load

  async function fetchRandomPokemon() {
    pokemonImage.style.display = "none";
    loading.style.display = "block";
    const randomId = Math.floor(Math.random() * 1010) + 1;
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
      );
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      const data = await response.json();
      displayPokemon(data);
    } catch (error) {
      alert("Oh no! That Pokemon isn't available…");
      console.error(error);
    } finally {
      loading.style.display = "none";
      pokemonImage.style.display = "block";
    }
  }

  function displayPokemon(data) {
    currentPokemonId = data.id;

    // Name
    pokemonName.textContent = data.name;

    // ID
    pokemonId.textContent = `ID: ${data.id}`;

    // Height
    pokemonHeight.textContent = `Height: ${data.height / 10} m`;

    // Weight
    pokemonWeight.textContent = `Weight: ${data.weight / 10} kg`;

    // Image
    pokemonImage.src = data.sprites.front_default;
    pokemonImage.alt = data.name;

    // Types
    pokemonTypes.innerHTML = "";
    data.types.forEach((typeInfo) => {
      const typeElement = document.createElement("span");
      typeElement.className = `type ${typeInfo.type.name}`;
      typeElement.textContent = typeInfo.type.name;
      pokemonTypes.appendChild(typeElement);
    });

    // Stats
    pokemonStats.innerHTML = "";
    data.stats.forEach((stat) => {
      const statElement = document.createElement("div");
      statElement.className = "stat";
      statElement.innerHTML = `
                <span>${stat.stat.name.replace("-", " ")}:</span>
                <span>${stat.base_stat}</span>
            `;
      pokemonStats.appendChild(statElement);
    });

    // Abilities
    pokemonAbilities.innerHTML = "";
    data.abilities.forEach((abilityInfo) => {
      const abilityElement = document.createElement("span");
      abilityElement.className = "ability";
      abilityElement.textContent = abilityInfo.ability.name.replace("-", " ");
      pokemonAbilities.appendChild(abilityElement);
    });
  }
});
