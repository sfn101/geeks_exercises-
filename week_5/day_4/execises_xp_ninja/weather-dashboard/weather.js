const axios = require('axios');
const chalk = require('chalk');

async function getWeather(city) {
  try {
    const response = await axios.get(`https://wttr.in/${city}?format=j1`);
    const data = response.data;
    const current = data.current_condition[0];
    const temp = current.temp_C;
    const desc = current.weatherDesc[0].value;
    console.log(chalk.blue(`Weather in ${city}: ${desc}, Temperature: ${temp}°C`));
  } catch (error) {
    console.error(chalk.red('Error fetching weather:', error.message));
  }
}

module.exports = { getWeather };