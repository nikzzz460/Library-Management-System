import React from "react";


const BookCarousel = () => {
  const books = [
    { src: "./images/VLSI.jpg", title: "" },
    { src: "./images/Frontend.jpg", title: "" },
    { src: "./images/Java.jpg", title: "" },
  ];

  return (
    <div className="container mt-4">
      <h3 className="text-center">New Arrival</h3>
      <div
        id="bookCarousel"
        className="carousel slide"
        data-ride="carousel"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <div className="carousel-inner">
          {books.map((book, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={book.src}
                className="d-block w-100"
                alt={book.title}
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="carousel-caption">
                <h5>{book.title}</h5>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#bookCarousel"
          role="button"
          data-slide="prev"
          style={{ color: "black" }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#bookCarousel"
          role="button"
          data-slide="next"
          style={{ color: "black" }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default BookCarousel;
