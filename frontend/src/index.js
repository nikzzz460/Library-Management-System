import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './index.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import LoginPage from './landing_page/login/LoginPage';
import SupportPage from './landing_page/support/SupportPage';
import PagenotFound from './landing_page/PagenotFound';
import StaffSignupPage from './landing_page/signup/StaffSignupPage';
import StudentSignupPage from './landing_page/signup/StudentSignupPage';



import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import StudentPage from './landing_page/StudentPage/StudentPage';
import StudentPageWishlist from './landing_page/StudentPage/Box2/Wishlist';
import StudentPageLeaderboard from './landing_page/StudentPage/Box2/Leaderboard';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>

     <Navbar/>
        <Routes>

            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup/staff' element={<StaffSignupPage/>}/>
            <Route path='/signup/student' element={<StudentSignupPage/>}/>
            <Route path='/support' element={<SupportPage/>}/>
            <Route path='/*' element={<PagenotFound/>}/>

            {/* student & staff page: */}
            <Route path='/student' element={<StudentPage/>}/>
            <Route path='/student/wishlist' element={<StudentPageWishlist/>}/>
            <Route path='/student/leaderboard' element={<StudentPageLeaderboard/>}/>



        </Routes>
     <Footer/>

    </BrowserRouter>
);

