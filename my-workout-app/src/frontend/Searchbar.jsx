import React, { useState } from 'react';
import { exerciseOptions, FetchData } from '../backend/FetchData';
import saveIcon from '../assets/saveIcon.png'
//import ReactPlayer from 'react-player';

function Searchbar() {
  const [search, setSearch] = useState('');
  const [exercises, setExercises] = useState([]);

  const handleSearch = async () => {
    if (search) {
      try {
        const exerciseData = await FetchData(exerciseOptions);

        
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

      <div className='SearchBar'>
      <input className = "searchBar"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      

      <button className= "searchButton" onClick={handleSearch}>Search</button>
      </div>
      <ul className = "workoutContainer">
        {exercises.map((exercise, index) => (
          <li className = "workoutCards" key={index}>
            <img src={exercise.gifUrl} className='exercise-gif'></img>
            <h3>{exercise.name}</h3>
            <img src={saveIcon} className='save-icon'></img>
          </li>
        ))}
      </ul>

      <footer>
        <p>&copy; 2025 Workout App | All Rights Reserved</p>
      </footer>

    </div>
    
  );

  
}

export default Searchbar;


