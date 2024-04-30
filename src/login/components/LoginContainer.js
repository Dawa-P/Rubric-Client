import React, { useState } from "react";
import LoginForm from "./LoginForm";
import './LoginContainer.css'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logIn } from "../../action/auth";
import { useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';

const LoginContainer = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("sending login data",{email,password});

        try{
            const response = await logIn({email,password});
            console.log('Login Response ==>',response);
            if(response.data)
            {
                console.log('save user in Redux and local storage then redirect');
                // save user and token to local storage

                window.localStorage.setItem('auth',JSON.stringify(response.data))

                // save user and token to redux
                dispatch({
                    type:"LOGGED_IN",
                    payload:response.data,
                });
                
            }
            

            toast.success("Login Sucessful! You will be redirected to dashboard")
            
            setTimeout(() => {
                navigate("/dashboard")
            },2000);
            
        }catch(err){
            console.log("error is",err.response.data)
            const errorMessage = err.response && err.response.data?err.response.data:"An error occurred";
            toast.error(errorMessage);

        }
    }
    return (
        <div class="login-container">
            <h2>LOGIN</h2>
            <LoginForm handleSubmit={handleSubmit}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
            />

            <ToastContainer position="bottom-right"/>
            
        </div>
    
    );

};

export default LoginContainer;