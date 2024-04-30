import React from "react";
import './MainContainer.css'
import './CurrentUser.css'
import { FaBars, FaSearch, FaUser } from 'react-icons/fa';
import { FaSignOutAlt,FaTimes} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Modal from 'react-modal';

const Header = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {auth} = useSelector((state) => ({...state}));

    const [showModal,setShowModal] = useState(false);


    const logout = () =>{
        dispatch({
            type:'LOGOUT',
            payload:null,
        });
        window.localStorage.removeItem('auth');
        navigate('/');

    }

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <header class="header">
                <div className="menu-icon" onclick="openSidebar()">
                <FaBars className="main-menu-icons"/>
                </div>
                <div className="header-left">
                <FaSearch className="main-menu-icons"/>
                </div>
                <div className="header-right">
                <FaUser onClick={openModal} className="main-menu-icons" title="User"/>
                {auth && (<a onClick={logout} className="logout-button" title="Logout"><FaSignOutAlt className="main-menu-icons"/></a>)}
                
                </div>

                <Modal className="current-user-modal"
                isOpen={showModal}
                onRequestClose={closeModal}
                contentLabel="User Details Modal"
            >
                <p>{auth.data.user.name}</p>
                <span>{auth.data.user.email}</span>
                <br/>
                
                <button><FaTimes onClick={closeModal} className="cross-button"/></button>
            </Modal>

            </header>
    );
};

export default Header;