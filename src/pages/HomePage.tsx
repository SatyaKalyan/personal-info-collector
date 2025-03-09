import React from 'react';
import PersonalInfoForm from '../components/PersonalInfoForm';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <h1>Personal Information Collector</h1>
            <PersonalInfoForm />
        </div>
    );
};

export default HomePage;