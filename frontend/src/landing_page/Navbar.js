import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  // Define paths for which a different navbar is needed
  const loggedInPages = ["/student", "/staff", "/staff/issuehistory", "/staff/ViewBooks","/staff/AllBooks","/staff/allMembers", "/staff/editMember", "/staff/issuetomember", "/staff/managedue", "/staff/returnbook", "/staff/DueFines", "/staff/recentTrans" 
    , "/student/category", "/student/rates" , "/student/reviews", "/student/reservations", "/student/wishlist", "/student/issued", "/student/leaderboard", "/student/record", "/student/category/comp", "/student/category/entc", "/student/category/it" ,
    "/student/category/mech", "/student/category/instru", "/student/category/bsh","/login/facial-recognition", 
  ];
  const noNavbarPages = ["/login", "/signup"];

  // Check the current path
  const currentPath = location.pathname;

  // Do not show navbar on certain pages
  if (noNavbarPages.includes(currentPath)) {
    return null;
  }

  const isLoggedIn = loggedInPages.includes(currentPath);

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#ffee58" }}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="..\images\LMSlogo.jpg"
            alt="Logo"
            style={{
              borderRadius: "50%",
              height: "70px",
              width: "90px",
              objectFit: "cover",
            }}
          />
        </Link>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-5 ms-auto"> {/* Push items to the right using 'ms-auto' */}
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/login"
                    style={{ color: "#000000" }}
                  >
                    Login
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "#000000" }}
                  >
                    Signup
                  </a>
                  <ul
                    className="dropdown-menu"
                    style={{ backgroundColor: "#a1887f" }}
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="/signup/staff"
                        style={{ color: "#000000" }}
                      >
                        Staff
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/signup/student"
                        style={{ color: "#000000" }}
                      >
                        Student
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about"
                    style={{ color: "#000000" }}
                  >
                    About
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/notifications"
                    style={{ color: "#000000" }}
                  >
                    Notifications
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/profile"
                    style={{ color: "#000000" }}
                  >
                    Profile
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/logout"
                    style={{ color: "#000000" }}
                  >
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
