import React, { useState } from 'react';
import { exerciseOptions, FetchData } from './FetchData';

function Searchbar() {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);



  const handleSearch = async () => {
    if (search) {
      try {
        const exerciseData = await FetchData(exerciseOptions);

        console.log('Fetched exercise data:', exerciseData);

        const searchedExercise = exerciseData.filter((exercise) =>
          exercise.name.toLowerCase().includes(search.toLowerCase())||
          exercise.target.toLowerCase().includes(search.toLowerCase())||
          exercise.equipment.toLowerCase().includes(search.toLowerCase())

        );

        
        setSearch('');
        setExercises(searchedExercise);
      } catch (error) {
        console.error('Error during search:', error);
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            {exercise.name}
            
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Searchbar;