import React, { useState } from 'react';
import { exerciseOptions, FetchData } from './FetchData';

function Searchbar() {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);

  const handleSearch = async () => {
    if (search) {
      try {
        const exerciseData = await FetchData(exerciseOptions);

        const searchedExercise = exerciseData.filter((exercise) =>
          exercise.name.toLowerCase().includes(search)||
          exercise.bodyPart.toLowerCase().includes(search)
        );

        console.log(searchedExercise);
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
            <h3>{exercise.name}</h3>
            
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Searchbar;
