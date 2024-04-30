import React, { useEffect } from "react";

import './SignupForm.css'
const SignupForm = ({handleSubmit,name,setName,email,setEmail,password,setPassword,confirmpassword,setConfirmPassword}) => {
    return (
        <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" placeholder="Enter your name here" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div class="form-group">
                    <label for="email">Email Address:</label>
                    <input type="text" placeholder="Enter your email address here"  value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)} required minLength="8"/>
                </div>

                <div class="form-group">
                    <label for="confirm-password">Confirm Password:</label>
                    <input type="password" placeholder="Enter same password again here" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} required minLength="8"/>
                </div>
                <button type="submit">Signup</button>
        </form>

    );
};

export default SignupForm;