import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../frontend/SignUp.css'


function SignUp() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const[loginEmail, setLoginEmail] = useState('');
    const[loginPassword, setLoginPassword] = useState('');
    const[successMessage, setSuccessMessage] = useState('');
    const[errorMesssage, setErrorMessage] = useState('');

    const handleSignup = async(e) =>{
        e.preventDefault();
        console.log("Signing up with:", { name, email, password });
        try{
            const response = await fetch('http://localhost:3001/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name: name, password: password, email: email}),
            });
        

        const data = await response.json();
        console.log("Response received:", response.status, data);
            if(response.ok){
                setSuccessMessage('Signup successful. Now login.')
                setErrorMessage('')
                setIsLogin(true);
            }
            else{
                setErrorMessage(data.message || 'Signup failed')
            }
        }
        catch (error){
            setErrorMessage('Error occured')
        }
    }


    const handleLogin = async (e) => {
    e.preventDefault();
    try{
    const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: loginEmail, password: loginPassword}),
    });

        const data = await response.json();
        if(response.ok){
            localStorage.setItem('token', data.token);
            console.log('Login successful');
            navigate('/profile');
        } else {
            console.error('Login failed:', data.message);
            setErrorMessage(data.message || 'Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
        setErrorMessage('An error occurred during login');
    }
}

    const handleToggle = () => {
        setIsLogin(!isLogin);
    }



  return (
    <div>
        <div className = "login-container">
            {isLogin ? (
                <div className = "login-card">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <input className='input-field' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} type="email" placeholder='Email' required/>
                    </div>
                    <div>
                        <input className='input-field' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} type="password" placeholder='Password' required/>
                    </div>
                    <button className= 'login-button'type="submit">Log In</button>
                </form>
                <button className='login-button' onClick={handleToggle}>Don't have an account? Sign Up here.</button>
                </div>
            ) : (
                <div>
                    <div className="joinNow-card">
                    <h1>Join Now</h1>
                    <form onSubmit={handleSignup} >
                        <div>
                            <input className='input-field' value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder='Name' required/>
                        </div>
                        <div>
                            <input className='input-field' value={email} onChange={(e) => {
        console.log("🔹 Email:", e.target.value);
        setEmail(e.target.value);
    }}  type="email" placeholder='Email' required/>
                        </div>
                        <div>
                            <input className='input-field' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' required/>
                        </div>
                    
                        <button  className= 'login-button'  type="submit">Join</button>
                    
                    </form>  
                    <button className='login-button' onClick={handleToggle}>Already Have an Account? Login here.</button>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default SignUp