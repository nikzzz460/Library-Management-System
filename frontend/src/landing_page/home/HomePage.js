import React from 'react';
import ImgGallery from './ImgGallery';
import NewArrivals from './NewArrivals';
import Events from './UpcomingEvents';
import Comments from './CommentsSection';
import AboutUs from './AboutUs';
import HomeMap from './Map';
import WriteExperience from './WriteExperience';

function HomePage() {
    return ( 
        <>
            <ImgGallery/>
            <NewArrivals/>
            <Events/>
            <Comments/>
            <AboutUs/>
            <HomeMap/>
            <WriteExperience/>
        </>
     );
}

export default HomePage;