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

// HomePage imports 
import Visit from './landing_page/home/Visit';
import ProfileSetting from './landing_page/home/ProfileSetting';
import ReportPage from './landing_page/home/ReportPage';


// staff imports

import StaffPage from './landing_page/StaffPage/StaffPage';
// box 1
import AllBooks from './landing_page/StaffPage/Box1/allBooks';
import ViewBooks from './landing_page/StaffPage/Box1/ViewBooks';

// box2
import AllMembers from './landing_page/StaffPage/Box2/allMembers';
import EditMember from './landing_page/StaffPage/Box2/EditMember';

// box3
import IssueHistory from './landing_page/StaffPage/Box3/IssueHistory';
import IssueToMember from './landing_page/StaffPage/Box3/IssueToMember';
import ReturnBooks from './landing_page/StaffPage/Box3/ReturnBooks';
import ManageDue from './landing_page/StaffPage/Box3/ManageDue';

// box4
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
            <Route path='/visit' element={<Visit/>}/>
            <Route path='/ProfileSetting' element={<ProfileSetting/>}/>
            <Route path='/ReportPage' element={<ReportPage/>}/>

            {/* student  page: */}
            <Route path='/student' element={<StudentPage/>}/>
            <Route path='/student/wishlist' element={<StudentPageWishlist/>}/>
            <Route path='/student/leaderboard' element={<StudentPageLeaderboard/>}/>

            {/* staff page: */}
            <Route path='/staff' element={<StaffPage/>}/>

            {/* box1 */}
            <Route path='/staff/AllBooks' element={<AllBooks/>}/>
            <Route path='/staff/ViewBooks' element={<ViewBooks/>}/>

            {/* box2 */}
            <Route path='/staff/allMembers' element={<AllMembers/>}/>
            <Route path='/staff/EditMember' element={<EditMember/>}/>

            {/* box3 */}
            <Route path='/staff/IssueHistory' element={<IssueHistory/>}/>
            <Route path='/staff/IssuetoMember' element={<IssueToMember/>}/>
            <Route path='/staff/returnbook' element={<ReturnBooks/>}/>
            <Route path='/staff/ManageDue' element={<ManageDue/>}/>

            {/* box4  */}
            <Route path='/staff/dueFines' element={<DueFines/>}/>
            <Route path='/staff/recentTrans' element={<RecentTrans/>}/>



        </Routes>
    
        <Footer/>
    </BrowserRouter>
);

