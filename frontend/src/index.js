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

import Logout from './landing_page/Logout';
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import StudentPage from './landing_page/StudentPage/StudentPage';
import Rates from './landing_page/StudentPage/Box1/Rates';
import BookTable from './landing_page/StudentPage/Box1/Reservations';
import CategoryCards from './landing_page/StudentPage/Box1/Category';
import Review from './landing_page/StudentPage/Box1/Reviews';

import StudentPageWishlist from './landing_page/StudentPage/Box2/Wishlist';
import StudentPageLeaderboard from './landing_page/StudentPage/Box2/Leaderboard';
import StudentPageIssuedBooks from './landing_page/StudentPage/Box2/Issued';
import StudentPageRecords from './landing_page/StudentPage/Box2/Records';

// students : technical books category imports

import COMP from './landing_page/StudentPage/Box1/Categories/COMP';
import IT from './landing_page/StudentPage/Box1/Categories/IT';
import ENTC from './landing_page/StudentPage/Box1/Categories/ENTC';
import MECH from './landing_page/StudentPage/Box1/Categories/MECH';
import INSTRU from './landing_page/StudentPage/Box1/Categories/INSTRU';
import BSH from './landing_page/StudentPage/Box1/Categories/BSH';

// students : non-technical books category imports

import NOVEL from './landing_page/StudentPage/Box1/Categories/NOVEL';
import NARRATION from './landing_page/StudentPage/Box1/Categories/NARRATION';
import SELFHELP from './landing_page/StudentPage/Box1/Categories/SELFHELP';
import MYSTERY from './landing_page/StudentPage/Box1/Categories/MYSTERY';
import FICTION from './landing_page/StudentPage/Box1/Categories/FICTION';
import HISTORY from './landing_page/StudentPage/Box1/Categories/HISTORY';

// students : newspaper category imports
import HINDUSTANTIMES from './landing_page/StudentPage/Box1/Categories/HINDUSTANTIMES';
import TIMESOFINDIA from './landing_page/StudentPage/Box1/Categories/TIMESOFINDIA';
import THEHINDU from './landing_page/StudentPage/Box1/Categories/THEHINDU';

// footer imports
import PrivacyPolicy from './landing_page/footer/PrivacyPolicy';
import TermsOfService from './landing_page/footer/TermsOfService';
import Guideline from './landing_page/footer/Guideline';
import LibraryContact from './landing_page/footer/LibraryContact';

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

import ForgotPassword from './landing_page/login/ForgotPassword';
import Notifications from './landing_page/Notifications';
import Profile from './landing_page/Profile';

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
            <Route path= '/student/rates' element={<Rates/>}/>
            <Route path= '/student/reservations' element={<BookTable/>}/>
            <Route path= '/student/category' element={<CategoryCards/>}/>
            
            {/*  category routes  */}
            <Route path='/student/category/comp' element={<COMP />} />
            <Route path='/student/category/it' element={<IT />} />
            <Route path='/student/category/entc' element={<ENTC />} />
            <Route path='/student/category/mech' element={<MECH />} />
            <Route path='/student/category/instru' element={<INSTRU />} />
            <Route path='/student/category/bsh' element={<BSH />} />

            {/* /* NON-TECH routes */}
            <Route path='/student/category/history' element={<HISTORY />} />
            <Route path='/student/category/fiction' element={<FICTION />} />
            <Route path='/student/category/novel' element={<NOVEL />} />
            <Route path='/student/category/narrative' element={<NARRATION />}/>
            <Route path='/student/category/self-help' element={<SELFHELP />} />
            <Route path='/student/category/mystery' element={<MYSTERY />} />

            {/*  newspaper routes  */}
            <Route path='/student/category/the%20hindu' element={<THEHINDU/>} />
            <Route path='/student/category/hindustan%20times' element={<HINDUSTANTIMES />} />
            <Route path='/student/category/times%20of%20india' element={<TIMESOFINDIA />} />


            <Route path= '/student/reviews' element={<Review/>}/>
            <Route path='/student' element={<StudentPage/>}/>
            <Route path='/student/wishlist' element={<StudentPageWishlist/>}/>
            <Route path='/student/leaderboard' element={<StudentPageLeaderboard/>}/>
            <Route path='/student/issued' element={<StudentPageIssuedBooks/>}/>
            <Route path='/student/record' element={<StudentPageRecords/>}/>

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
             
            {/* Footer routes */}

            <Route path="/guideline" element={<Guideline/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path= "/library-contact" element={<LibraryContact />} />
           
            <Route path= "/logout" element={<Logout />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/profile' element={<Profile />} />

        </Routes>

     <Footer/>

    </BrowserRouter>
);

