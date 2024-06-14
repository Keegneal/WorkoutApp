import React, {useState, useEffect} from 'react'
import {exerciseOptions, FetchData} from './FetchData'


function Searchbar() {

    const [search, setSearch] = useState('');
    const [exerciseOptions, setExercises]= useState([]);

    

    const handleSearch = async () => {
        if (search){
            const exerciseData = await FetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

            const searchedExercise = exerciseData.filter((exercise) =>  exercise.name.toLowerCase().includes(search)
            || exercise.bodypart.toLowerCase().includes(search)
            || exercise.target.toLowerCase().includes(search)
            || exercise.equipment.toLowerCase().includes(search));

            setSearch('');
            setExercises(searchedExercise);
        }
    }
    return (
        <div>
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick = {handleSearch}>Search</button>
        </div>
    );

}

export default Searchbar;
