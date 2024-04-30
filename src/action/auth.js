import axios from "axios";

export const signUp = async(user) =>{
    return await axios.post(`${process.env.REACT_APP_API}/api/v1/users/signup`,user);
}

export const logIn = async(user) => {
    return await axios.post(`${process.env.REACT_APP_API}/api/v1/users/login`,user);
}

export const allRubric = async()=>{
    return await axios.get(`${process.env.REACT_APP_API}/api/v1/adminrubric`);
}


export const searchParticularRubric = async(query)=>{
    return await axios.post(`${process.env.REACT_APP_API}/api/v1/adminrubric/search`,query);
}

export const searchRubricBySubject = async(query)=>{
    return await axios.post(`${process.env.REACT_APP_API}/api/v1/adminrubric/bysubject`,query);
}