
import axios from 'axios';

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const FetchData = async (options) => {
  try {
    console.log('Fetching data with API Key:', import.meta.env.VITE_APP_RAPID_API_KEY); // Log API key to verify
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
    return [];
  }
};
