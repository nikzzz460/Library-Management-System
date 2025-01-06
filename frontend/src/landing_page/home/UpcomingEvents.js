import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpcomingEvents() {
  const events = [
    {
      id: 1,
      image: '../images/Event1.jpg', // Replace with actual image path
      description: 'Book testing: A chance for students to sample different books before reading them.',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfvkNfV6umYH0UDfzvJHQRPXFt6MhtxPD8nj0cINvph3RkNTQ/viewform', // Replace with actual Google Form link
    },
    {
      id: 2,
      image: '../images/Event1.jpg', // Replace with actual image path
      description: 'Book drive: A collection of gently used books that are donated to local shelters and nursing homes.',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfqym1JZ3nZ9t1BYME7J3zW2srj1LpMvrbTXJoqbgHzuCC6kw/viewform', // Replace with actual Google Form link
    },
    {
      id: 3,
      image: '../images/Event1.jpg', // Replace with actual image path
      description: 'Design a book jacket: A competition to design a jacket or dust cover for a selected book.',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScF2fKKrmjQIs5Zr8grD5lpSlekbPgfuwWW_vqkEQ-FuSBogw/viewform', // Replace with actual Google Form link
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
                <a
                  href={event.formLink}
                  className="btn btn-outline-dark mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  REGISTER
                </a>
                <p className="card-text">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;
