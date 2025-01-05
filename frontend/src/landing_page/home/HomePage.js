import React from 'react';
import ImgGallery from './ImgGallery';
import NewArrivals from './NewArrivals';
import Events from './UpcomingEvents';
import AboutUs from './AboutUs';
import HomeMap from './Map';
import WriteExperience from './WriteExperience';

function HomePage() {
    return ( 
        <>
            <ImgGallery/>
            <NewArrivals/>
            <Events/>
            <AboutUs/>
            <HomeMap/>
            <WriteExperience/>
        </>
     );
}

export default HomePage;