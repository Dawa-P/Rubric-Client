import React, { useState } from "react";
import SignupForm from "./SignupForm";
import './SignupContainer.css'
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signUp } from "../../action/auth";
import { useNavigate } from "react-router-dom";



const SignupContainer = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmPassword] = useState("");

    const navigate = useNavigate();


    const handleSubmit = async(e) => {
        e.preventDefault();
        console.table(name,email,password,confirmpassword)
        try{
            // const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/users/signup`,{name,
            // email,
            // password,
            // passwordConfirm: confirmpassword});

            const response = await signUp({name,email,password,passwordConfirm:confirmpassword});
            console.log('Registration successful ==>',response);
            toast.success("Registration successful. Login Now!");
            
            setTimeout(() => {
                navigate("/")
            },2000);
          
           
        }catch(err){
            console.log("Axios Error", err);
            // toast.error(err.response.data.message);

            if(err.response)
            {
                // console.err('Response Status',err.res.status);
                console.log('Response Data', err.response.data.message);
            }

            if(err.response.status===500)
            {
                toast.error(err.response.data.message);
            }

        }
    }
    return (
        <div class="signup-container">
            <h2>SIGNUP HERE</h2>
            <SignupForm 
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmpassword={confirmpassword}
            setConfirmPassword={setConfirmPassword}
            />

            <ToastContainer position="bottom-right"/>

        </div>
    
    );

};

export default SignupContainer;