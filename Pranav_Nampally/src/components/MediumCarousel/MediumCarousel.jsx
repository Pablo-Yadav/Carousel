import { useState, useEffect } from "react";
import "../Carousel.css";

function MediumCarousel() {
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
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(newIndex);
    }
  }

  function handleNext() {
    let newIndex = index + 1;
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  }

  return (
    <div className="whole">
      <div className="carousel-container">
        <button onClick={handlePrev}>{"<"}</button>
        <img className="carousel-item" src={data[index]}></img>
        <button onClick={handleNext}>{">"}</button>
      </div>
      <p style={{ alignSelf: "center" }}>
        Page {index + 1} of {data.length}
      </p>
    </div>
  );
}

export default MediumCarousel;
