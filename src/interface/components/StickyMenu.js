// StickyMenu.js

import React, {useRef} from 'react';
import './StickyMenu.css'; // Import CSS file for sticky menu
import { Link,useLocation } from 'react-router-dom';

function StickyMenu() {
  const location = useLocation();
  return (
    <header className="sticky-menu">
      <div className="logo-container">
        <img src="./images/logo3.png" alt="Company Logo" className="main-logo" />
        <p className="sticky-slogan">Empowering Educators, Crafting Excellence</p>
      </div>

      <nav>
        <ul>
        <li><Link to='/' className={location.pathname === '/' ? 'menu-link active' : 'menu-link'}>Home</Link></li>
        <li ><Link to='/about' className={location.pathname === '/about' ? 'menu-link active' : 'menu-link'}>About Us</Link></li>
        <li ><Link to='/contact' className={location.pathname === '/contact' ? 'menu-link active' : 'menu-link'}>Contact Us</Link></li>
        {/* <li ><Link to='/contact' className='menu-link'>Rubrics</Link></li> */}
        <li ><Link to='/login' className={location.pathname === '/login' ? 'menu-link active' : 'menu-link'}>Login</Link></li>
        </ul>
    </nav>
    </header>
  );
}

export default StickyMenu;
