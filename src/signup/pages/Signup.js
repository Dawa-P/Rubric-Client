import React from "react";
import './Signup.css';
import SignupContainer from "../components/SignupContainer";

const Signup = () => {
    return(
        <div className="main-container">
            <div className="left-container">
                <div className="image-container">
                    <img src="./images/students1.png" alt="somthing"/>
                    <div className="text-overlay">
                        <h3 className="slogan">Empowering Educators, Crafting Excellence</h3>

                    </div>
                </div>
            
            
            </div>

            <div className="right-container">
                <img src="./images/logo5.png" alt="Description of the logo" class="signup-logo"/>

                <SignupContainer/>
                

            </div>
        </div>

    );
};

export default Signup;