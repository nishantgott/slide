import React, { useState } from 'react';
import Layout from '../components/Layout';
import Step1 from '../components/LoginRegister/Step1';
import Step2 from '../components/LoginRegister/Step2';
import Step3 from '../components/LoginRegister/Step3';

const RegisterPage = () => {
    const [step, setStep] = useState(1);
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const renderStep = () => {
        if (step === 1) {
            return <Step1 setStep={setStep} setCredentials={setCredentials} credentials={credentials} />;
        } else if (step === 2) {
            return <Step2 setStep={setStep} />;
        } else {
            return <Step3 setStep={setStep} />;
        }
    }

    return (
        <Layout>
            {renderStep()}
        </Layout>
    )
}

export default RegisterPage;
