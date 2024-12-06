import React, { useState } from 'react';
import './dashboard.css';
import { useHistory } from 'react-router-dom';
import { generatePassword } from './api'; // The API call to generate password (we'll implement it in the next step)

const Dashboard = () => {
    const [passwordType, setPasswordType] = useState('');
    const [generatedPassword, setGeneratedPassword] = useState('');
    const history = useHistory();

    // Handle password generation
    const handleGeneratePassword = (type) => {
        setPasswordType(type);
        // Show password generation modal
        document.getElementById('passwordModal').style.display = 'block';
    };

    // Generate Password based on type (Personal/Enterprise)
    const generatePasswordBasedOnType = async () => {
        const result = await generatePassword(passwordType);
        setGeneratedPassword(result.password);
    };

    return (
        <div className="dashboard">
            <h1>Welcome, {localStorage.getItem('username')}!</h1>
            <div className="actions">
                <h3>Actions</h3>
                <button onClick={() => handleGeneratePassword('personal')}>Generate Password</button>
                <button>Unmask Vault</button>
            </div>

            {/* Password generation modal */}
            <div id="passwordModal" className="modal">
                <div className="modal-content">
                    <h3>Select Password Type</h3>
                    <button onClick={generatePasswordBasedOnType}>Personal</button>
                    <button onClick={generatePasswordBasedOnType}>Enterprise</button>
                </div>
            </div>

            {/* Display generated password */}
            {generatedPassword && (
                <div className="generated-password">
                    <p>Your current password is: {generatedPassword}</p>
                    <button onClick={() => document.getElementById('passwordModal').style.display = 'none'}>
                        OK
                    </button>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
