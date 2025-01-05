import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const THEHINDU = () => {
  return (
    <div className="container mt-5">
      {/* The Hindu ePaper Embed */}
      <div className="mb-4">
        <h2 className="text-center mb-3">The Hindu ePaper</h2>
        <iframe
          src="https://epaper.thehindu.com/"
          width="100%"
          height="800px"
          frameBorder="0"
          allowFullScreen
          title="The Hindu ePaper"
        ></iframe>
      </div>
    </div>
  );
};

export default THEHINDU;
