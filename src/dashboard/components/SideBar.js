import React from "react";
import './MainContainer.css'

import { FaListAlt, FaClipboardCheck, FaPoll } from 'react-icons/fa';



const SideBar = () => {

    // Get the current URL pathname
    const currentPath = window.location.pathname;
    console.log("Current path",currentPath);


    // define a function to check if a link is active
    const isActive = (path) =>{
        return currentPath === path ? 'active': "";
    }
    return (
        <aside id="sidebar">
                <div className='sidebar-title'>
                    <div className='sidebar-brand'>
                        <img src="./images/logo3.png" alt="My Icon" className="admin-logo"/>
                    </div>

                </div>

                <ul class="sidebar-list">
                    <li class="sidebar-list-item" className={`sidebar-list-item ${isActive('/dashboard')}`}>
                        <a href="/dashboard">
                            <FaListAlt /> All Rubrics
                        </a>
                    </li>

                    <li class="sidebar-list-item" className={`sidebar-list-item ${isActive('/rubrics')}`}>
                        <a href="/rubrics">
                            <FaClipboardCheck /> Export by Assessment
                        </a>
                    </li>

                    <li class="sidebar-list-item" className={`sidebar-list-item ${isActive('/subjects')}`}>
                        <a href="/subjects">
                            <FaPoll /> Export by Subject
                        </a>
                    </li>
    
                </ul>
        </aside>

    );
};

export default SideBar;