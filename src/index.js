import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
 import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';



import './index.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import LoginPage from './landing_page/login/LoginPage';
import SupportPage from './landing_page/support/SupportPage';
import PagenotFound from './landing_page/PagenotFound';
import StaffSignupPage from './landing_page/signup/StaffSignupPage';
import StudentSignupPage from './landing_page/signup/StudentSignupPage';
import Navbar from "./landing_page/Navbar";
import StudentPage from './landing_page/StudentPage/StudentPage';
import StudentPageWishlist from './landing_page/StudentPage/Box2/Wishlist';
import StudentPageLeaderboard from './landing_page/StudentPage/Box2/Leaderboard';
import Footer from './landing_page/Footer/Footer';

// staff imports

import StaffPage from './landing_page/StaffPage/StaffPage';

import AllBooks from './landing_page/StaffPage/Box1/allBooks';
import ViewBooks from './landing_page/StaffPage/Box1/ViewBooks';


import ManageMembers from './landing_page/StaffPage/Box2/allMembers';
import AddMember from './landing_page/StaffPage/Box2/EditMember';
import EditMember from './landing_page/StaffPage/Box2/EditMember';

import IssueBooks from './landing_page/StaffPage/Box3/IssueToMember';
import ReturnBooks from './landing_page/StaffPage/Box3/Return';
import ManageReturns from './landing_page/StaffPage/Box3/ManageDue';

import DueFines from './landing_page/StaffPage/Box4/DueFines';
import RecentTrans from './landing_page/StaffPage/Box4/RecentTrans';





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

            {/* student  page: */}
            <Route path='/student' element={<StudentPage/>}/>
            <Route path='/student/wishlist' element={<StudentPageWishlist/>}/>
            <Route path='/student/leaderboard' element={<StudentPageLeaderboard/>}/>

            {/* staff page: */}
            <Route path='/staff' element={<StaffPage/>}/>

            
            <Route path='/staff/AllBooks' element={<AllBooks/>}/>
            <Route path='/staff/ViewBooks' element={<ViewBooks/>}/>

            <Route path='/staff/manage-members' element={<ManageMembers/>}/>
            <Route path='/staff/add-member' element={<AddMember/>}/>
            <Route path='/staff/edit-member' element={<EditMember/>}/>

            <Route path='/staff/issue-books' element={<IssueBooks/>}/>
            <Route path='/staff/return-books' element={<ReturnBooks/>}/>
            <Route path='/staff/manage-returns' element={<ManageReturns/>}/>

            <Route path='/staff/due-fines' element={<DueFines/>}/>
            <Route path='/staff/recent-transactions' element={<RecentTrans/>}/>



        </Routes>
    
        <Footer/>
    </BrowserRouter>
);

