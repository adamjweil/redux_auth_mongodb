import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    });

    const { username, email, password, password2 } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
            console.log('Passwords dont match');
        } else {
            console.log("SUCCESS");
        }
    };

    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        name="username" 
                        value={username} 
                        onChange={e => onChange(e)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        name="email" 
                        value={email} 
                        onChange={e => onChange(e)}
                        required
                    />
                <small claassName="form-text"
                    >This site uses Gravatar so if you want a profile image, use a
                    Gravatar email</small>
                
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    value={password} 
                    onChange={e => onChange(e)}
                    name="password"
                    minLength="4"
                />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={password2} 
                    onChange={e => onChange(e)}
                    name="password2"
                    minLength="4"
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p claasName="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
    </Fragment>
    );
}

export default Register;