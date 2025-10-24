const readline = require('readline');
const { getWeather } = require('./weather');

function startDashboard() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter city name: ', (city) => {
    getWeather(city);
    rl.close();
  });
}

module.exports = { startDashboard };