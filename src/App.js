import React from 'react';


import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import PrivateRoutes from './action/PrivateRoutes';
import {toast,ToastContainer} from 'react-toastify';

// page import for dashboard
import Dashboard from './dashboard/pages/Dashboard';
import BySubject from './dashboard/pages/BySubject'
import UserRubric from './dashboard/pages/UserRubric';
// page import for login and signup
import Signup from './signup/pages/Signup';
import Login from './login/pages/Login';

// page import for user interface
import MainInterface from './interface/pages/MainInterface';
import AboutUs from './interface/pages/AboutUs';
import ContactUs from './interface/pages/ContactUs';


const App = () => {
  return (<Router>
    <Routes>
      
      <Route path="/login" exact element={<Login />}/>

      <Route path="/signup" element = {<Signup/>}/>

      <Route path="/" element = {<MainInterface/>}/>
      <Route path="/about" element = {<AboutUs/>}/>
      <Route path="/contact" element = {<ContactUs/>}/>

      <Route element={<PrivateRoutes/>}>
        <Route path="/dashboard" exact element = {<Dashboard/>}/>
        <Route path="/rubrics" exact element = {<UserRubric/>}/>
        <Route path="/subjects" exact element = {<BySubject/>}/>
      </Route>

    </Routes>

  </Router>
  );

};

export default App;
