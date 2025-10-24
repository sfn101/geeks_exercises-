const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Fetched data:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchData();