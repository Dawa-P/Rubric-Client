import React from "react";

import './Dashboard.css'
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import AllRubrics from "../components/AllRubrics";


const Dashboard = () => {
    return (
      <div className="grid-container">
        <Header/>
        <SideBar/>
        <AllRubrics/>
            
      </div>
    );
  };
  
  export default Dashboard;