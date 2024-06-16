import axios from 'axios';
import React, { useState } from 'react'

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handelLoginSubmit = async (e) => {
        const res = await axios.post('http://localhost:8000/auth/login', { username, password });
    }

    return (
        <div>
            <div style={containerStyle}>
                <main className="form-signin w-50 m-auto">
                    <form>
                        <h1 className="h3 mb-5 fw-normal">Login</h1>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="username" placeholder="name@example.com" onChange={handleUsernameChange} value={username} />
                            <label htmlFor="floatingInput">Username</label>
                        </div>
                        <div className="form-floating mt-2">
                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={handlePasswordChange} value={password} />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button className="btn btn-primary w-25 py-2 mt-5" type="submit" onClick={() => handelLoginSubmit}>Next</button>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default LoginPage;
