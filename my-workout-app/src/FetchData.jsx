import axios from 'axios';

const API_URL = 'https://gym-fit.p.rapidapi.com/v1/exercises/search';

export const exerciseOptions = {
  method: 'GET',
<<<<<<< HEAD
  url: API_URL,
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'gym-fit.p.rapidapi.com'
=======
  url: 'https://gym-workout1.p.rapidapi.com/exercise',
  headers: {
     'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'gym-workout1.p.rapidapi.com'
>>>>>>> 99e451af5797f79ae2166871d3030c7f8d8d2dac
  }
};

export const FetchData = async (exerciseOptions) => {
  try {
<<<<<<< HEAD
    const response = await axios.request(options);
    // If API returns paginated results, handle pagination here
    const data = response.data;
    return data;
=======
    console.log('Fetching data with API Key:', import.meta.env.VITE_APP_RAPID_API_KEY); // Log API key to verify
    const response = await axios.request(exerciseOptions);
    return response.data;
>>>>>>> 99e451af5797f79ae2166871d3030c7f8d8d2dac
  } catch (error) {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
    return [];
  }
};
