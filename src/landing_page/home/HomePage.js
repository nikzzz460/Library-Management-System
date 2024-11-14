import React from 'react';
import BookCarousel from '../BookCarousel';
import HomePageAbout from '../HomePageAbout';
import HomePageDetail from '../HomePageDetail';
import UpcomingEvents from '../EventsUpcoming';
import FeedbackForm from '../Feedback';


function HomePage() {
    return (
        <div>
            <h1>HomePage</h1>
            < HomePageAbout />
            <BookCarousel /> {/* Include the BookCarousel component */}
            <UpcomingEvents/>
            < HomePageDetail/>
            <FeedbackForm/>
            
        </div>
    );
}

export default HomePage;
