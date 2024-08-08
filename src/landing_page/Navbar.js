import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#ffee58"}}
    >
      <div className="container">
        {/* Main logo ----------------------------------> */}
        <Link className="navbar-brand" to="/">
          <img
            src="..\images\LMSlogo.jpg"
            style={{ borderRadius: "90%", width: "12%"}}
            alt="Logo"
          />
        </Link>

        {/* Lists of navbar ----------------------------------> */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/login">
                Login
              </Link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle nav-link-custom"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Signup
              </a>
              <ul class="dropdown-menu" style={{ backgroundColor: "#ffee58"}}>
                <li>
                  <a class="dropdown-item dropdown-item-custom" href="/signup/staff">
                    Staff
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item dropdown-item-custom" href="/signup/student">
                    Student
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-link-custom" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
