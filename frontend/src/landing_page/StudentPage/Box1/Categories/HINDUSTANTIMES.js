import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HINDUSTANTIMES = () => {
  return (
    <div className="container mt-5">
      {/* Hindustan Times ePaper Embed */}
      <div className="mb-4">
        <h2 className="text-center mb-3">Hindustan Times ePaper</h2>
        <iframe
          src="https://epaper.hindustantimes.com/"
          width="100%"
          height="800px"
          frameBorder="0"
          allowFullScreen
          title="Hindustan Times ePaper"
        ></iframe>
      </div>
    </div>
  );
};

export default HINDUSTANTIMES;
