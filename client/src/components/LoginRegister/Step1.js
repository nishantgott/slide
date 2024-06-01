import React from 'react'


const Step1 = (props) => {

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
    };

    const handleUsernameChange = (e) => {
        props.setCredentials({
            ...props.credentials,
            username: e.target.value
        });
    }

    const handlePasswordChange = (e) => {
        props.setCredentials({
            ...props.credentials,
            password: e.target.value
        });
    }

    return (
        <div>
            <div style={containerStyle}>
                <main className="form-signin w-50 m-auto">
                    <form>
                        <h1 className="h3 mb-5 fw-normal">Credentials</h1>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="username" placeholder="name@example.com" onChange={handleUsernameChange} value={props.credentials.username} />
                            <label htmlFor="floatingInput">Username</label>
                        </div>
                        <div className="form-floating mt-2">
                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={handlePasswordChange} value={props.credentials.password} />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button className="btn btn-primary w-25 py-2 mt-5" type="submit" onClick={() => props.setStep(2)}>Next</button>
                        <p className="mt-5 mb-3 text-body-secondary">Step 1 of 3</p>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Step1
