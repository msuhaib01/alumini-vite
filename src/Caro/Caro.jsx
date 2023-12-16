import React from "react";
import "./styling.css";

export default function Caro() {
  return (
    <div className="container">
      <div className="carousel">
        <input type="radio" id="carousel-1" name="carousel[]" defaultChecked />
        <input type="radio" id="carousel-2" name="carousel[]" />
        <input type="radio" id="carousel-3" name="carousel[]" />
        <input type="radio" id="carousel-4" name="carousel[]" />
        <ul className="carousel__items">
          <li className="carousel__item">
            <img
              src="https://i.imgur.com/ISzmFCl.png"
              title="source: imgur.com"
            />
          </li>
          <li className="carousel__item">
            <img
              src="https://i.imgur.com/ci7lJsR.png"
              title="source: imgur.com"
            />
          </li>
          <li className="carousel__item">
            <img src="https://i.imgur.com/CyV6elf.png" alt="" />
          </li>
          <li className="carousel__item">
            <img src="https://i.imgur.com/DuxzbNh.png" alt="" />
          </li>
        </ul>
        <div className="carousel__prev">
          <label htmlFor="carousel-1"></label>
          <label htmlFor="carousel-2"></label>
          <label htmlFor="carousel-3"></label>
          <label htmlFor="carousel-4"></label>
        </div>
        <div className="carousel__next">
          <label htmlFor="carousel-1"></label>
          <label htmlFor="carousel-2"></label>
          <label htmlFor="carousel-3"></label>
          <label htmlFor="carousel-4"></label>
        </div>
      </div>
    </div>
  );
}
