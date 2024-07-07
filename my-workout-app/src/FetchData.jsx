
import axios from 'axios';

export const exerciseOptions = {
  method: 'GET',
  url: 'https://gym-workout1.p.rapidapi.com/exercise',
  headers: {
     'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'gym-workout1.p.rapidapi.com'
  }
};

export const FetchData = async (exerciseOptions) => {
  try {
    console.log('Fetching data with API Key:', import.meta.env.VITE_APP_RAPID_API_KEY); // Log API key to verify
    const response = await axios.request(exerciseOptions);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
    return [];
  }
};
