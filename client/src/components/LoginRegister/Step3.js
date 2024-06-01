import React from 'react';

const Step3 = (props) => {
    const clubsList = ["Crescendo", "Music", "Dance", "A", "B", "dsiafj", "dasfaA", "Aodskfaok", "IJAncnk", "Ajijdafoij"];

    const containerStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '50%' // Full viewport height
    };


    return (
        <div >
            <div style={containerStyle} className='mx-auto'>
                <p className='fs-2'>Sports</p>
                <div className="btn-group flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    {
                        clubsList.map((club, index) => {
                            const checkboxId = `btncheck${index + 1}`;
                            return (
                                <div key={index}>
                                    <input type="checkbox" className="btn-check" id={checkboxId} autoComplete="off" />
                                    <label className="btn btn-outline-dark rounded-pill m-2" htmlFor={checkboxId}>{club}</label>
                                </div>
                            );
                        })
                    }
                </div>

                <p className='fs-2'> Academics</p>
                <div className="btn-group flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    {
                        clubsList.map((club, index) => {
                            const checkboxId = `btncheck${index + 1}`;
                            return (
                                <div key={index}>
                                    <input type="checkbox" className="btn-check" id={checkboxId} autoComplete="off" />
                                    <label className="btn btn-outline-dark rounded-pill m-2" htmlFor={checkboxId}>{club}</label>
                                </div>
                            );
                        })
                    }
                </div>


                <p className='fs-2'>Skills </p>
                <div className="btn-group flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    {
                        clubsList.map((club, index) => {
                            const checkboxId = `btncheck${index + 1}`;
                            return (
                                <div key={index}>
                                    <input type="checkbox" className="btn-check" id={checkboxId} autoComplete="off" />
                                    <label className="btn btn-outline-dark rounded-pill m-2" htmlFor={checkboxId}>{club}</label>
                                </div>
                            );
                        })
                    }
                </div>
                <p className='fs-2'>Clubs</p>
                <div className="btn-group flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    {
                        clubsList.map((club, index) => {
                            const checkboxId = `btncheck${index + 1}`;
                            return (
                                <div key={index}>
                                    <input type="checkbox" className="btn-check" id={checkboxId} autoComplete="off" />
                                    <label className="btn btn-outline-dark rounded-pill m-2" htmlFor={checkboxId}>{club}</label>
                                </div>
                            );
                        })
                    }
                </div>
                <p className='fs-2'>Student Chapters</p>
                <div className="btn-group flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    {
                        clubsList.map((club, index) => {
                            const checkboxId = `btncheck${index + 1}`;
                            return (
                                <div key={index}>
                                    <input type="checkbox" className="btn-check" id={checkboxId} autoComplete="off" />
                                    <label className="btn btn-outline-dark rounded-pill m-2" htmlFor={checkboxId}>{club}</label>
                                </div>
                            );
                        })
                    }
                </div>
                <p className='fs-2'>Hobbies</p>
                <div className="btn-group flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    {
                        clubsList.map((club, index) => {
                            const checkboxId = `btncheck${index + 1}`;
                            return (
                                <div key={index}>
                                    <input type="checkbox" className="btn-check" id={checkboxId} autoComplete="off" />
                                    <label className="btn btn-outline-dark rounded-pill m-2" htmlFor={checkboxId}>{club}</label>
                                </div>
                            );
                        })
                    }
                </div>
                <button className="btn btn-primary w-25 py-2 mt-5 " type="submit" onClick={() => props.setStep(2)}>Previous</button>
                <button className="btn btn-primary w-25 py-2 mt-5 ms-5" type="submit">Submit</button>



            </div>
        </div>
    );
}

export default Step3;
