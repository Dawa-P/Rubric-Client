import React from "react";

import './Dashboard.css'
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import RubricBySubject from "../components/RubricBySubject";


const UserRubric = () => {
    return (
      <div className="grid-container">
        <Header/>
        <SideBar/>
        <RubricBySubject/>
      </div>
    );
  };
  
  export default UserRubric;