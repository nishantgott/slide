import React from 'react';

const Step3 = (props) => {
    const clubsList = ["Crescendo", "Music", "Dance", "A", "B", "dsiafj", "dasfaA", "Aodskfaok", "IJAncnk", "Ajijdafoij"];
    const academicsList = ["coding", "webdevlopment", "dsa", "ml", "gpa", "cyber", "gate"];
    const sportsList = ["cricket", "badminton", "kabbadi", "basketball"];
    const skillsList = ["ufbu", "nflen", "nfolebf"];
    const studentChaptersList = ["acm", "csi", "ieee", "gdsc"];
    const hobbiesList = ["art", "dance", "thinking", "dbdb", "hfekj"];

    const containerStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '50%' // Full viewport height
    };

    const handleSportsChange = (e) => {
        if (e.target.checked) {
            props.setAddInterest({
                ...props.addInterest,
                sports: [...props.addInterest.sports, e.target.id]
            });
        } else {
            props.setAddInterest({
                ...props.addInterest,
                sports: props.addInterest.sports.filter(sport => sport !== e.target.id)
            });
        }
    };

    const handleAcademicsChange = (e) => {
        if (e.target.checked) {
            props.setAddInterest({
                ...props.addInterest,
                academics: [...props.addInterest.academics, e.target.id]
            });
        } else {
            props.setAddInterest({
                ...props.addInterest,
                academics: props.addInterest.academics.filter(a => a !== e.target.id)
            });
        }
    };

    const handleSkillsChange = (e) => {
        if (e.target.checked) {
            props.setAddInterest({
                ...props.addInterest,
                skills: [...props.addInterest.skills, e.target.id]
            });
        } else {
            props.setAddInterest({
                ...props.addInterest,
                skills: props.addInterest.skills.filter(s => s !== e.target.id)
            });
        }
    };

    const handleClubsChange = (e) => {
        if (e.target.checked) {
            props.setAddInterest({
                ...props.addInterest,
                clubs: [...props.addInterest.clubs, e.target.id]
            });
        } else {
            props.setAddInterest({
                ...props.addInterest,
                clubs: props.addInterest.clubs.filter(c => c !== e.target.id)
            });
        }
    };

    const handleStudentChaptersChange = (e) => {
        if (e.target.checked) {
            props.setAddInterest({
                ...props.addInterest,
                student_chapters: [...props.addInterest.student_chapters, e.target.id]
            });
        } else {
            props.setAddInterest({
                ...props.addInterest,
                student_chapters: props.addInterest.student_chapters.filter(s => s !== e.target.id)
            });
        }
    };

    const handleHobbiesChange = (e) => {
        if (e.target.checked) {
            props.setAddInterest({
                ...props.addInterest,
                hobbies: [...props.addInterest.hobbies, e.target.id]
            });
        } else {
            props.setAddInterest({
                ...props.addInterest,
                hobbies: props.addInterest.hobbies.filter(h => h !== e.target.id)
            });
        }
    };

    return (
        <div>
            <div style={containerStyle} className='mx-auto'>
                <p className='fs-2'>Sports</p>
                <div className="btn-group flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    {sportsList.map((s, index) => (
                        <div key={index}>
                            <input
                                type="checkbox"
                                className="btn-check"
                                id={s}
                                autoComplete="off"
                                onChange={handleSportsChange}
                                checked={props.addInterest.sports.includes(s)}
                            />
                            <label className="btn btn-outline-dark rounded-pill m-2" htmlFor={s}>{s}</label>
                        </div>
                    ))}
                </div>

                <p className='fs-2'>Academics</p>
                <div className="btn-group flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    {academicsList.map((a, index) => (
                        <div key={index}>
                            <input
                                type="checkbox"
                                className="btn-check"
                                id={a}
                                autoComplete="off"
                                onChange={handleAcademicsChange}
                                checked={props.addInterest.academics.includes(a)}
                            />
                            <label className="btn btn-outline-dark rounded-pill m-2" htmlFor={a}>{a}</label>
                        </div>
                    ))}
                </div>

                <p className='fs-2'>Skills</p>
                <div className="btn-group flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    {skillsList.map((s, index) => (
                        <div key={index}>
                            <input
                                type="checkbox"
                                className="btn-check"
                                id={s}
                                autoComplete="off"
                                onChange={handleSkillsChange}
                                checked={props.addInterest.skills.includes(s)}
                            />
                            <label className="btn btn-outline-dark rounded-pill m-2" htmlFor={s}>{s}</label>
                        </div>
                    ))}
                </div>

                <p className='fs-2'>Clubs</p>
                <div className="btn-group flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    {clubsList.map((c, index) => (
                        <div key={index}>
                            <input
                                type="checkbox"
                                className="btn-check"
                                id={c}
                                autoComplete="off"
                                onChange={handleClubsChange}
                                checked={props.addInterest.clubs.includes(c)}
                            />
                            <label className="btn btn-outline-dark rounded-pill m-2" htmlFor={c}>{c}</label>
                        </div>
                    ))}
                </div>

                <p className='fs-2'>Student Chapters</p>
                <div className="btn-group flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    {studentChaptersList.map((s, index) => (
                        <div key={index}>
                            <input
                                type="checkbox"
                                className="btn-check"
                                id={s}
                                autoComplete="off"
                                onChange={handleStudentChaptersChange}
                                checked={props.addInterest.student_chapters.includes(s)}
                            />
                            <label className="btn btn-outline-dark rounded-pill m-2" htmlFor={s}>{s}</label>
                        </div>
                    ))}
                </div>

                <p className='fs-2'>Hobbies</p>
                <div className="btn-group flex flex-wrap" role="group" aria-label="Basic checkbox toggle button group">
                    {hobbiesList.map((h, index) => (
                        <div key={index}>
                            <input
                                type="checkbox"
                                className="btn-check"
                                id={h}
                                autoComplete="off"
                                onChange={handleHobbiesChange}
                                checked={props.addInterest.hobbies.includes(h)}
                            />
                            <label className="btn btn-outline-dark rounded-pill m-2" htmlFor={h}>{h}</label>
                        </div>
                    ))}
                </div>

                <button className="btn btn-primary w-25 py-2 mt-5" type="submit" onClick={() => props.setStep(2)}>Previous</button>
                <button className="btn btn-primary w-25 py-2 mt-5 ms-5" type="submit" >Submit</button>
            </div>
        </div>
    );
}

export default Step3;
