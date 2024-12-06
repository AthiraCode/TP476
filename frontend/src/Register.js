import React, { useState } from 'react';
import { register } from './api';
import './FormStyles.css'; // Import the CSS file

const Register = () => {
    const [formData, setFormData] = useState({ username: '', password: '', email: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await register(formData);
        setMessage(response.message);
    };

    return (
        <div className="form-container">
            <h1 className="app-heading">MyPass</h1>
            <h2>Register</h2>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="form-button">Register</button>
            </form>
            {message && <p className="message">{message}</p>}
            <p className="form-footer">
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    );
};

export default Register;
