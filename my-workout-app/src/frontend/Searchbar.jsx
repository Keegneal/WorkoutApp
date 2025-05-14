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
          exercise.target.toLowerCase().includes(search)||
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

  const handleSave = async(exercise) =>{
    const token  = localStorage.getItem('token')
    if(!token){
      alert("please login to save workouts!")
      return
    }

    try{
      const response = await fetch('http://localhost:3001/auth/save_exercises',{

        method: 'POST',
        headers:{
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({exercise})
      })

      const data = await response.json()
      
      if(response.ok){
        alert('Worout saved!')
      }
      else{
        alert(`Failed to save workout ${data.message}`)
      }
    }
    catch(err){
      console.error('Save error', err)
      alert('Error saving workout')
    }
  }

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
            <img src={saveIcon} className='save-icon' onClick={()=> handleSave(exercise)}/>
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


