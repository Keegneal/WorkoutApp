import React, { useState } from 'react';
import { exerciseOptions, FetchData } from './FetchData';
//import ReactPlayer from 'react-player';

function Searchbar() {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);

  const handleSearch = async () => {
    if (search) {
      try {
        const exerciseData = await FetchData(exerciseOptions);

        console.log(exerciseData)
        const searchedExercise = exerciseData.filter((exercise) =>
          exercise.bodyPart.toLowerCase().includes(search)||
          exercise.name.toLowerCase().includes(search)
          
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
      <input className = "searchBar"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className= "searchButton" onClick={handleSearch}>Search</button>
      <ul className = "workoutContainer">
        {exercises.map((exercise, index) => (
          <li className = "workoutCards" key={index}>
            <img src={exercise.gifUrl}></img>
            <h3>{exercise.name}</h3>
           
            
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Searchbar;


