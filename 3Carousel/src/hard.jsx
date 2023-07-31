import React, { useState } from "react";
import { useEffect } from "react";

export default function Carousel_hard() {
  const [index, setIndex] = useState(0);
  const length = 5;

  const data = [
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
    "https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    "https://image.tmdb.org/t/p/original/m8JTwHFwX7I7JY5fPe4SjqejWag.jpg",
    "https://image.tmdb.org/t/p/original//8rpDcsfLJypbO6vREc0547VKqEv.jpg",
    "https://image.tmdb.org/t/p/original//qWQSnedj0LCUjWNp9fLcMtfgadp.jpg",
  ];

  function handlePrevious() {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length : newIndex);
  }

  function handleNext() {
    const newIndex = index + 1;
    setIndex(newIndex > length-1 ? 0 : newIndex);
  }
  function AutoSlideChange(){
    const newIndex = index+1;
    setIndex(newIndex>length-1? 0 : newIndex)
  }

  useEffect (() => {
    let interval = setInterval(AutoSlideChange,2000);
    return ()=>clearInterval(interval);
  })


  return (
    <div className="container">
      <button onClick={handlePrevious} >
        {"<"}
      </button>
      <img class="imageSize" alt = "Hi" src = {data[index]} />
      <button onClick={handleNext} >
        {">"}
      </button>
    </div>
  );
}
