import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

import './LoginForm.css'
// import { Link } from "react-router-dom/cjs/react-router-dom";
import { NavLink } from "react-router-dom";
const LoginForm = ({handleSubmit,email,setEmail,password,setPassword}) => {
    return (
        <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="username">Email Address:</label>
                    <input type="text" id="username" placeholder="Enter your email address here" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) =>setPassword(e.target.value)} required minLength="8"/>
                </div>
                <button type="submit" >Login</button>

                <div className="dont-have-account">
                     <p>Don't have an account? <NavLink className="signup-link" to="/signup">Sign up</NavLink></p>
                </div>
        </form>

        

    );
};

export default LoginForm;