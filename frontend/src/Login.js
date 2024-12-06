import React, { useState } from 'react';
import { login } from './api';
import './FormStyles.css'; // Import the CSS file

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await login(formData);
        setMessage(response.message);
    };

    return (
        <div className="form-container">
            <h1 className="app-heading">MyPass</h1>
            <h2>Login</h2>
            <form className="form" onSubmit={handleSubmit}>
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
                <button type="submit" className="form-button">Login</button>
            </form>
            {message && <p className="message">{message}</p>}
            <p className="form-footer">
                Forgot your password? <a href="/reset-password">Click here</a>
            </p>
        </div>
    );
};

export default Login;
