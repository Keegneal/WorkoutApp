import axios from 'axios';

//const API_URL = 'https://gym-fit.p.rapidapi.com/v1/exercises/search';

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'x-rapidapi-key': '496c6ba404msh54fab30678ef0fdp15dd42jsn552c6fe10338',//import.meta.env.VITE_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  },
  params:{
    limit: 0, // default limit, you can change this value as needed
    offset: 0 
  }
};

export const FetchData = async (options) => {
  try {
    //console.log('Fetching data with API Key:', import.meta.env.VITE_APP_RAPID_API_KEY); // Log API key to verify
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
    return []; // Return an empty array if there's an error
  }
};
