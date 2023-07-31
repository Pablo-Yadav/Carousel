// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import "../Carousel.css";

function EasyCarousel() {
  const [index, setIndex] = useState(0);
  const data = [
    "https://image.tmdb.org/t/p/original//qWQSnedj0LCUjWNp9fLcMtfgadp.jpg",
    "https://image.tmdb.org/t/p/original///4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    "https://image.tmdb.org/t/p/original//8rpDcsfLJypbO6vREc0547VKqEv.jpg",
    "https://image.tmdb.org/t/p/original/m8JTwHFwX7I7JY5fPe4SjqejWag.jpg",
    "https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
  ];

  function handlePrev() {
    let newIndex = index - 1;
    setIndex(newIndex);
  }

  function handleNext() {
    let newIndex = index + 1;
    setIndex(newIndex);
  }

  let image = data[index];

  return (
    <div className="whole">
      <div className="carousel-container">
        <button disabled={index === 0} onClick={handlePrev}>
          {"<"}
        </button>
        <img className="carousel-item" src={image}></img>
        <button disabled={index === data.length - 1} onClick={handleNext}>
          {">"}
        </button>
      </div>
      <p style={{ alignSelf: "center" }}>
        Page {index + 1} of {data.length}
      </p>
    </div>
  );
}

export default EasyCarousel;
