import React from 'react'


const Step2 = (props) => {

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
                        <h1 className="h3 mb-5 fw-normal">Credentials</h1>
                        <div className="form-floating">
                            <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating mt-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email</label>
                        </div>
                        <select className="form-control w-25 mt-3" id="dropdown" name="options">
                            <option value="option3" disabled selected>Select gender</option>
                            <option value="option1">Male</option>
                            <option value="option2">Female</option>
                        </select>
                        <select className="form-control w-25 mt-3" id="dropdown" name="options">
                            <option value="option3" disabled selected>Branch</option>
                            <option value="option1">CSE</option>
                            <option value="option2">IT</option>
                            <option value="option4">CSE-AIML</option>
                            <option value="option5">CSE-CYS</option>
                            <option value="option6">CSE-DS</option>
                            <option value="option7">CSE-IOT</option>
                            <option value="option8">CSBS</option>
                            <option value="option9">AI&DS</option>
                            <option value="option10">EIE</option>
                            <option value="option11">ECE</option>
                            <option value="option12">EEE</option>
                            <option value="option13">ME</option>
                            <option value="option14">CE</option>
                            <option value="option15">AE</option>
                        </select>
                        <select className="form-control w-25 mt-3" id="dropdown" name="options">
                            <option value="option3" disabled selected>Graduation year</option>
                            <option value="option1">2024</option>
                            <option value="option2">2025</option>
                            <option value="option2">2026</option>
                            <option value="option2">2027</option>
                            <option value="option2">2028</option>
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
