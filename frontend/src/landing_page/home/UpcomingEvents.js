import React from 'react';

function Events() {
    return ( 
        <div className="container">
        <h2 className="text-center">EVENTS COMING UP...</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Event 1</h5>
                <p className="card-text">Some details about the event.</p>
                <a href="#" className="btn btn-primary">Register</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            { <div className="card">
              <div className="card-body">
                <h5 className="card-title">Event 2</h5>
                <p className="card-text">Some details about the event.</p>
                <a href="#" className="btn btn-primary">Register</a>
              </div>
            </div>}
          </div>
          <div className="col-md-4">
            { <div className="card">
              <div className="card-body">
                <h5 className="card-title">Event 3</h5>
                <p className="card-text">Some details about the event.</p>
                <a href="#" className="btn btn-primary">Register</a>
              </div>
            </div>}
          </div>
        </div>
      </div>
     );
}

export default Events;