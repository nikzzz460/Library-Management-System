import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpcomingEvents() {
  const events = [
    {
      id: 1,
      image: '../images/Event1.jpg', // Replace with actual image path
      description: 'Greyhound divisively hello coldly wonderfully marginally far upon excluding.',
    },
    {
      id: 2,
      image: '../images/Event1.jpg', // Replace with actual image path
      description: 'Greyhound divisively hello coldly wonderfully marginally far upon excluding.',
    },
    {
      id: 3,
      image: '../images/Event1.jpg', // Replace with actual image path
      description: 'Greyhound divisively hello coldly wonderfully marginally far upon excluding.',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">EVENTS COMING UP...</h2>
      <div className="row">
        {events.map(event => (
          <div className="col-md-4" key={event.id}>
            <div className="card">
              <img
                src={event.image}
                className="card-img-top"
                alt="Event"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <button className="btn btn-outline-dark mb-3">REGISTER</button>
                <p className="card-text">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;
