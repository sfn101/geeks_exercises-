// DOM elements
const fetchBtn = document.getElementById('fetch-btn');
const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const characterDiv = document.getElementById('character-info');
const nameEl = document.getElementById('name');
const heightEl = document.getElementById('height');
const genderEl = document.getElementById('gender');
const birthYearEl = document.getElementById('birth_year');
const homeworldEl = document.getElementById('homeworld');

// Event listener
fetchBtn.addEventListener('click', fetchRandomCharacter);

// Function to fetch random character
async function fetchRandomCharacter() {
    // Show loading, hide others
    loadingDiv.classList.remove('hidden');
    errorDiv.classList.add('hidden');
    characterDiv.classList.add('hidden');

    // Generate random ID (1-83)
    const randomId = Math.floor(Math.random() * 83) + 1;

    try {
        // Fetch character data
        const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch character');
        }
        const data = await response.json();
        const character = data.result.properties;

        // Fetch homeworld name
        const homeworldResponse = await fetch(character.homeworld);
        const homeworldData = await homeworldResponse.json();
        const homeworldName = homeworldData.result.properties.name;

        // Display data
        nameEl.textContent = character.name;
        heightEl.textContent = character.height;
        genderEl.textContent = character.gender;
        birthYearEl.textContent = character.birth_year;
        homeworldEl.textContent = homeworldName;

        // Hide loading, show character
        loadingDiv.classList.add('hidden');
        characterDiv.classList.remove('hidden');
    } catch (error) {
        // Hide loading, show error
        loadingDiv.classList.add('hidden');
        errorDiv.classList.remove('hidden');
        console.error('Error fetching character:', error);
    }
}