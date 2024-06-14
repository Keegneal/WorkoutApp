

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_API_KEY ,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};



export const FetchData = async (url, options) => {
  
    const response = await fetch(url, options);
    const data = await response.json(); 
    
    return data;
}

