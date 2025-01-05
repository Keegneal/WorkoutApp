import React, {useState} from 'react'
import '../frontend/SignUp.css'


function SignUp() {
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const[loginEmail, setLoginEmail] = useState('');
    const[loginPassword, setLoginPassword] = useState('');

    const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginEmail, loginPassword);
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
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
                    <form onSubmit={handleSubmit} >
                        <div>
                            <input className='input-field' value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder='Name' required/>
                        </div>
                        <div>
                            <input className='input-field' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' required/>
                        </div>
                        <div>
                            <input className='input-field' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' required/>
                        </div>
                    
                        <button  className= 'login-button' type="submit">Join</button>
                    
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