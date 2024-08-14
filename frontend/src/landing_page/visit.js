import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function visit() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav
          id="sidebar"
          className="col-md-2 d-none d-md-block bg-light sidebar"
          style={{ height: "100vh" }}
        >
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="bi bi-house-door"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-card-list"></i> Visits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-graph-up"></i> Reports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-question-circle"></i> Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-gear"></i> Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-person"></i> Profile
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main content */}
        <main
          role="main"
          className="col-md-10 ml-sm-auto col-lg-10 px-4"
        >
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Welcome Staff name!</h1>
          </div>

          {/* Search and Schedules */}
          <div className="row mb-3">
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                placeholder="Search visits"
              />
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Visit Schedules</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Daily</li>
                    <li className="list-group-item">Weekly</li>
                    <li className="list-group-item">Monthly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Cnum</th>
                  <th scope="col">Email</th>
                  <th scope="col">BookId</th>
                  <th scope="col">BookName</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                {/* Example table row */}
                <tr>
                  <td>John Doe</td>
                  <td>1234</td>
                  <td>john@example.com</td>
                  <td>5678</td>
                  <td>React Basics</td>
                  <td>10:00 AM</td>
                </tr>
                {/* More rows can be added here */}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">Company Logo</div>
            <div className="col-md-8 text-right">
              <a href="#">How It Works</a> | <a href="#">Pricing</a> |{" "}
              <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <p>Copyright © 2024 Company name</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default visit;
