import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TIMESOFINDIA = () => {
  return (
    <div className="container mt-5">
      {/* Times of India ePaper Embed */}
      <div className="mb-4">
        <h2 className="text-center mb-3">Times of India ePaper</h2>
        <iframe
          src="https://epaper.timesofindia.com/"
          width="100%"
          height="800px"
          frameBorder="0"
          allowFullScreen
          title="Times of India ePaper"
        ></iframe>
      </div>
    </div>
  );
};

export default TIMESOFINDIA;
