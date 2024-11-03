"use client"
import React, { useState } from 'react';
import NewNavbar from '../components/navbar';
function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.username || !formData.email || !formData.password) {
            setError("All fields are required.");
            return;
        }

        setError('');
        console.log('Form submitted:', formData);
        // Integrate your form submission logic here
    };

    return (
    <>
        <NewNavbar/>    
        <div className="signup-container">
            <h2>Sign Up for Douga</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                {error && <p className="error">{error}</p>}
                
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">Sign Up</button>
            </form>

            <style jsx>{`
                .signup-container {
                    max-width: 400px;
                    margin: 2rem auto;
                    padding: 2rem;
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                    text-align: center;
                }
                h2 {
                    margin-bottom: 1.5rem;
                    color: #764ba2;
                }
                .form-group {
                    margin-bottom: 1.5rem;
                }
                label {
                    display: block;
                    margin-bottom: 0.5rem;
                }
                input {
                    width: 100%;
                    padding: 0.5rem;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                }
                .submit-btn {
                    width: 100%;
                    padding: 0.75rem;
                    background: #667eea;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 1rem;
                }
                .submit-btn:hover {
                    background: #5563c1;
                }
                .error {
                    color: red;
                    margin-bottom: 1rem;
                }
            `}</style>
        </div>
        </>
    );
}

export default Signup;
