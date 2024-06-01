import React from 'react'


const Step2 = (props) => {

    const handleNameChange = (e) => {
        props.setProfile({
            ...props.profile,
            name: e.target.value
        })
    }
    const handleMailChange = (e) => {
        props.setProfile({
            ...props.profile,
            mail: e.target.value
        })
    }
    const handleGenderChange = (e) => {
        props.setProfile({
            ...props.profile,
            gender: e.target.value
        })
    }
    const handleBranchChange = (e) => {
        props.setProfile({
            ...props.profile,
            branch: e.target.value
        })
    }
    const handleGradChange = (e) => {
        props.setProfile({
            ...props.profile,
            graduation_year: e.target.value
        })
    }

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height
    };
    return (
        <div>
            <div style={containerStyle}>
                <main className="form-signin w-50 m-auto">
                    <form>
                        <h1 className="h3 mb-5 fw-normal">Profile</h1>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="name" placeholder="name@example.com" onChange={handleNameChange} value={props.profile.name} />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="email" className="form-control" id="mail" placeholder="name@example.com" onChange={handleMailChange} value={props.profile.mail} />
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <select className="form-control w-25 mt-3" id="gender" name="options" onChange={handleGenderChange} value={props.profile.gender}>
                            <option value="Nil" disabled selected>Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <select className="form-control w-25 mt-3" id="branch" name="options" onChange={handleBranchChange} value={props.profile.branch}>
                            <option value="Nil" disabled selected>Branch</option>
                            <option value="CSE">CSE</option>
                            <option value="IT">IT</option>
                            <option value="CSE-AIML">CSE-AIML</option>
                            <option value="CSE-CYS">CSE-CYS</option>
                            <option value="CSE-DS">CSE-DS</option>
                            <option value="CSE-IOT">CSE-IOT</option>
                            <option value="CSBS">CSBS</option>
                            <option value="AI&DS">AI&DS</option>
                            <option value="EIE">EIE</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="ME">ME</option>
                            <option value="CE">CE</option>
                            <option value="AE">AE</option>
                        </select>
                        <select className="form-control w-25 mt-3" id="graduation_year" name="options" onChange={handleGradChange} value={props.profile.graduation_year}>
                            <option value="option3" disabled selected>Graduation year</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                        </select>



                        <button className="btn btn-primary w-25 py-2 mt-5" type="submit" onClick={() => props.setStep(1)}>Previous</button>
                        <button className="btn btn-primary w-25 py-2 mt-5 ms-5" type="submit" onClick={() => props.setStep(3)}>Next</button>
                        <p className="mt-5 mb-3 text-body-secondary">Step 2 of 3</p>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Step2
