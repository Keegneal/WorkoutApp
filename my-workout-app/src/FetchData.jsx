import axios from 'axios';

const API_URL = 'https://gym-fit.p.rapidapi.com/v1/exercises/search';

export const exerciseOptions = {
  method: 'GET',
  url: API_URL,
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'gym-fit.p.rapidapi.com'
  }
};

export const FetchData = async (options) => {
  try {
    const response = await axios.request(options);
    // If API returns paginated results, handle pagination here
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
    return [];
  }
};
