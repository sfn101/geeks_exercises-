const planets = [
  {
    name: 'Mercury',
    distance: '57.91 million km',
    moons: 0,
    color: '#8C7853',
  },
  {
    name: 'Venus',
    distance: '108.2 million km',
    moons: 0,
    color: '#D6CDAF',
  },
  {
    name: 'Earth',
    distance: '149.6 million km',
    moons: 1,
    color: '#5B8C2A',
  },
  {
    name: 'Mars',
    distance: '227.9 million km',
    moons: 2,
    color: '#C1443D',
  },
  {
    name: 'Jupiter',
    distance: '778.5 million km',
    moons: 79,
    color: '#45078bff',
  },
  {
    name: 'Saturn',
    distance: '1.434 billion km',
    moons: 83,
    color: '#D9B44A',
  },
  {
    name: 'Uranus',
    distance: '2.871 billion km',
    moons: 27,
    color: '#A7C6ED',
  },
  {
    name: 'Neptune',
    distance: '4.495 billion km',
    moons: 14,
    color: '#5B8CDA',
  },
];
const listPlanetsSection = document.querySelector('.listPlanets');

planets.forEach(planet => {
  const div = document.createElement('div');
  div.textContent = planet.name;
  div.textContent += ` - Distance from Sun: ${planet.distance}`;
  div.textContent += ` - Moons: ${planet.moons}`;
  div.classList.add('planet');
  div.style.backgroundColor = planet.color;
  div.style.color = '#fff';
  listPlanetsSection.appendChild(div);
  let spaceBetweenMoons = 0;
  for (let i = 0; i < planet.moons; i++) {
    const moonDiv = document.createElement('div');
    moonDiv.classList.add('moon');
    moonDiv.style.left = `${150 + spaceBetweenMoons}px`;
    moonDiv.style.display = 'flex';
    moonDiv.style.alignItems = 'center';
    moonDiv.style.justifyContent = 'center';
    listPlanetsSection.appendChild(moonDiv);
    spaceBetweenMoons += 50;
    if (i > 7) {
      moonDiv.textContent = `+${planet.moons - i}`;
      break;
    }
  }
});
