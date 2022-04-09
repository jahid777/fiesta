import React from "react";

const Bag = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active carouselIndicators"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className="carouselIndicators"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className="carouselIndicators"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
          className="carouselIndicators"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://i.ibb.co/2tZQGWW/banner1.webp"
            className="d-block w-100"
            alt="..."
            height="350"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/DbQKYHQ/banner2.webp"
            className="d-block w-100"
            alt="..."
            height="350"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/vL2Bmcc/banner3.webp"
            className="d-block w-100"
            alt="..."
            height="350"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.ibb.co/4md9Cgx/banner4.webp"
            className="d-block w-100"
            alt="..."
            height="350"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Bag;
