import React from "react";

import './Dashboard.css'
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import EditRubric from "../components/EditRubric";


const UserRubric = () => {
    return (
      <div className="grid-container">
        <Header/>
        <SideBar/>
        <EditRubric/>
      </div>
    );
  };
  
  export default UserRubric;