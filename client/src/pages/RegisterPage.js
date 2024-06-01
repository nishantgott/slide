import React, { useState } from 'react';
import Layout from '../components/Layout';
import Step1 from '../components/LoginRegister/Step1';
import Step2 from '../components/LoginRegister/Step2';
import Step3 from '../components/LoginRegister/Step3';
import axios from 'axios';
import { genSalt } from 'bcrypt';

const RegisterPage = () => {
    const [step, setStep] = useState(1);
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [profile, setProfile] = useState({ name: "", mail: "", gender: "", branch: "", graduation_year: "" });
    const [addInterest, setAddInterest] = useState({ sports: [], academics: [], skills: [], clubs: [], student_chapters: [], hobbies: [] });

    // const handleSubmit = async () => {
    //     try {
    //         // const userCredentialCreated = await axios.post('http://localhost:8000/auth/register', { username: credentials.username, password: credentials.password });
    //         // const userProfileCreated = await axios.post('http://localhost:8000/slide/profile', { username: credentials.username, name: profile.name, mail: profile.mail, gender: profile.gender, branch: profile.branch, graduation_year: profile.graduation_year });
    //         // const userProfileAndInterest = await axios.post('http://localhost:8000/slide/form-all', { username: credentials.username, name: profile.name, mail: profile.mail, gender: profile.gender, branch: profile.branch, graduation_year: profile.graduation_year, addInterest: addInterest });
    //         // console.log(userCredentialCreated);
    //         // console.log(userProfileAndInterest);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const renderStep = () => {
        if (step === 1) {
            return <Step1 setStep={setStep} setCredentials={setCredentials} credentials={credentials} />;
        } else if (step === 2) {
            return <Step2 setStep={setStep} setProfile={setProfile} profile={profile} />;
        } else {
            return <Step3 setStep={setStep} setAddInterest={setAddInterest} addInterest={addInterest} />;
        }
    }

    return (
        <Layout>
            {renderStep()}
        </Layout>
    )
}

export default RegisterPage;
