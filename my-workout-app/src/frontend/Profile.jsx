import React, {useState, useEffect} from 'react'
import './Profile.css'



function Profile(){
    const[userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [displaySavedWorkouts, setSavedDisplayWorkouts] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setError('No authentication token found');
                    return;
                }

                console.log('Sending request with token:', token); // Debug log

                const response = await fetch('http://localhost:3001/auth/user', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                console.log('Response status:', response.status); // Debug log

                if (!response.ok) {
                    const errorData = await response.text();
                    console.error('Error response:', errorData);
                    throw new Error(`Failed to fetch user data: ${errorData}`);
                }

                const data = await response.json();
                console.log('Received data:', data);
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError(error.message || 'Error loading user data');
            }
        };

        fetchUserData();
    }, []);

    useEffect(()=>{
        const fetchSaved = async () =>{
            try {
                const token = localStorage.getItem('token')

                if(!token){
                    setError("No Saved Workouts")
                    return
                }

                const response = await fetch('http://localhost:3001/auth/saved_workouts',{
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
                });

                const data = await response.json()
                setSavedDisplayWorkouts(data)
                 
            }
            catch (err){
                console.error('Error loading saved exercises', err)
            }
        }
        fetchSaved();
    }, [])

    if (error) {
        return <div>{error}</div>;
    }

    if (!userData) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            <h1>{userData.name}'s Profile</h1>

            <h3> {userData.name}'s  Workouts</h3>
            
            {/* Add other user data fields */}


            <div>
            <h3> Saved Workouts</h3>
            <ul>
                {displaySavedWorkouts.map((exercise,index)=>
                <li key= {index}>
                    <h4>{exercise.name}</h4>
                    <img src = {exercise.gifUrl}/>
                    <p></p>
                </li>
            )}
            </ul>
            </div>
        </div>


        
    )
}
export default Profile;