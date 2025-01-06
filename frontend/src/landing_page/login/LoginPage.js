import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from react-router-dom

function LoginPage() {
  const [userType, setUserType] = useState("Student");
  const darkGray = "#6c757d";
  const lightGray = "#d3d3d3";
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Redirect based on userType
    if (userType === "Student") {
      navigate("/student"); // Redirect to Student page
    } else if (userType === "Staff") {
      navigate("/staff"); // Redirect to Staff page
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "80vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        paddingTop: "10vh",
        paddingBottom: "10vh",
      }}
    >
      {/* Logo Section */}
      <div
        style={{
          position: "absolute",
          top: "15px",
          left: "115px",
          zIndex: "100",
        }}
      >
        <Link to="/">
          <img
            src="..\images\LMSlogo.jpg"
            style={{ borderRadius: "90%", width: "12%" }}
            alt="Logo"
          />
        </Link>
      </div>

      <div className="text-center" style={{ width: "35%", zIndex: "2" }}>
        <div className="d-flex justify-content-center mb-3">
          <div className="btn-group" role="group" style={{ width: "100%" }}>
            <button
              type="button"
              className={`btn ${
                userType === "Student" ? "btn-primary" : "btn-light"
              }`}
              onClick={() => setUserType("Student")}
              style={{
                backgroundColor: userType === "Student" ? lightGray : "",
                borderColor: darkGray,
                width: "50%",
              }}
            >
              Student
            </button>
            <button
              type="button"
              className={`btn ${
                userType === "Staff" ? "btn-primary" : "btn-light"
              }`}
              onClick={() => setUserType("Staff")}
              style={{
                backgroundColor: userType === "Staff" ? lightGray : "",
                borderColor: darkGray,
                width: "50%",
              }}
            >
              Staff
            </button>
          </div>
        </div>

        <div
          className="card mx-auto"
          style={{
            maxWidth: "500px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "none",
          }}
        >
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  style={{ color: "black" }}
                  id="email"
                  placeholder="Email ID"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  style={{ color: "black" }}
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  <label
                    className="form-check-label"
                    style={{ color: "black" }}
                    htmlFor="rememberMe"
                  >
                    Remember Me
                  </label>
                </div>
              </div>
              <div className="mb-3 text-start">
                <Link
                  to="/forgot-password"
                  className="text-decoration-none"
                  style={{ color: "black" }}
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: lightGray,
                  borderColor: darkGray,
                  color: "black",
                  borderWidth: "1px",
                }}
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
