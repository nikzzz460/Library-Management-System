import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Review() {
  return (
    <div className="container mt-5">
      <div className="card mb-3" style={{ border: '1px solid black' }}>
        <div className="row no-gutters">
          <div className="col-md-2 d-flex justify-content-center align-items-center">
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#e9ecef',
                border: '1px solid black',
              }}
            ></div>
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">
                <b>Book Name: ABC</b>
              </h5>
              <p className="card-text">
                Suggestions if any
              </p>
              <p className="card-text">
                ⭐⭐⭐⭐⭐
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card mb-3" style={{ border: '1px solid black' }}>
        <div className="row no-gutters">
          <div className="col-md-2 d-flex justify-content-center align-items-center">
            <div
              style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#e9ecef',
                border: '1px solid black',
              }}
            ></div>
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">
                <b>Book Name: ABC</b>
              </h5>
              <p className="card-text">
                Suggestions if any
              </p>
              <p className="card-text">
                ⭐⭐⭐⭐⭐
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
