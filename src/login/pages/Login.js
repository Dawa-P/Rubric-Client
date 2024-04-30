import React from "react";

import './Login.css'
import LoginContainer from "../components/LoginContainer";

const Login = () => {
    return(
        <div className="main-container">
            <div className="left-container">
                <div className="image-container">
                    <img src="./images/students1.png" alt="somthing"/>
                    <div className="text-overlay">
                        <h3 className="login-slogan">Empowering Educators, Crafting Excellence</h3>

                    </div>
                </div>
            
            
            </div>

            <div className="right-container">
                <img src="./images/logo5.png" alt="Description of the logo" class="login-logo"/>

                <LoginContainer/>
                

            </div>
        </div>

    );
};

export default Login;
