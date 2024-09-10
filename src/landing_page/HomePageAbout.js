import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomePageAbout = () => {
  return (
    <div className="container mt-5">
      <Carousel
        indicators={false}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
      >
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body d-flex">
                <div className="square bg-dark" style={{ width: '50px', height: '50px' }}></div>
                <div className="ms-3 align-self-center">
                  <h5 className="card-title">Playlist Title</h5>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body d-flex">
                <div className="square bg-dark" style={{ width: '50px', height: '50px' }}></div>
                <div className="ms-3 align-self-center">
                  <h5 className="card-title">Playlist Title</h5>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      // Add more items here 
      </Carousel>
    </div>
  );
}

export default HomePageAbout;
