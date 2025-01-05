// IssueToMember.js

import React from "react";

const IssueToMember = () => {
  return (
    <div className="container">
      <div className="row" style={{ borderBottom: "1px solid #000" }}>
        <div className="col-md-6">
          <h2 style={{ textAlign: "center" }}>Student</h2>
        </div>
        <div className="col-md-6">
          <h2 style={{ textAlign: "center" }}>Book</h2>
        </div>
      </div>

      <div className="row" style={{ marginTop: "20px" }}>
        {/* Student Info */}
        <div className="col-md-6" style={{ borderRight: "1px solid #000" }}>
          <div style={{ textAlign: "center" }}>
            <img
              src="/images/Prachi.jpeg"
              alt="Student"
              style={{ width: "100px", height: "auto", borderRadius: "50%" }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <h4>Prachi Parihar</h4>
            <p>
              C Num: UEC2021244
              <br />
              Year: BTech
              <br />
              Email: prachi.parihar@cumminscollege.in
              <br />
              Address: xyz colony, khbhjcbehjhdawek Karvenagar Pune 123456
            </p>
          </div>
        </div>

        {/* Book Info */}
        <div className="col-md-6">
          <div style={{ textAlign: "center" }}>
            <h4>Scan Barcode</h4>
            <img
              src="barcode.png"
              alt="Barcode"
              style={{ width: "150px", height: "auto" }}
            />
            <br />
            <input type="text" placeholder="Enter text" style={{ marginTop: "10px" }} />
          </div>
          <div style={{ marginTop: "10px" }}>
            <p>
              Book ID: 1234564
              <br />
              Title: VLSI Design
              <br />
              Author: abcd efghi
              <br />
              Return Date: 12/12/24
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar Icons */}
      <div
        className="sidebar"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          width: "50px",
          backgroundColor: "#f8f9fa",
          padding: "10px 0",
          borderRight: "1px solid #ccc",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <i className="bi bi-house" style={{ fontSize: "24px" }}></i>
          <p style={{ fontSize: "12px" }}>Home</p>
        </div>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <i className="bi bi-person-lines-fill" style={{ fontSize: "24px" }}></i>
          <p style={{ fontSize: "12px" }}>Visits</p>
        </div>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <i className="bi bi-bar-chart-line" style={{ fontSize: "24px" }}></i>
          <p style={{ fontSize: "12px" }}>Reports</p>
        </div>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <i className="bi bi-question-circle" style={{ fontSize: "24px" }}></i>
          <p style={{ fontSize: "12px" }}>Help</p>
        </div>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <i className="bi bi-gear" style={{ fontSize: "24px" }}></i>
          <p style={{ fontSize: "12px" }}>Settings</p>
        </div>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <i className="bi bi-person-circle" style={{ fontSize: "24px" }}></i>
          <p style={{ fontSize: "12px" }}>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default IssueToMember;



