import * as React from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function FramerMotionCarousal() {
  let imgAddress = [
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
    "https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    "https://image.tmdb.org/t/p/original/m8JTwHFwX7I7JY5fPe4SjqejWag.jpg",
    "https://image.tmdb.org/t/p/original//8rpDcsfLJypbO6vREc0547VKqEv.jpg",
    "https://image.tmdb.org/t/p/original///4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    "https://image.tmdb.org/t/p/original//qWQSnedj0LCUjWNp9fLcMtfgadp.jpg"
  ];

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  }

  const [pointer, setPointer] = React.useState(0);
  const [image, setImage] = React.useState(imgAddress[pointer]);
  const [direction, setDirection] = React.useState('left');

  React.useEffect(() => {
    let interval = setInterval(() => {
      let p;
      if(pointer === imgAddress.length-1)
      p = 0;
      else
      p = pointer+1;
      setImage(imgAddress[p]);
      setPointer(p);
    }, 2000);
    return () => clearInterval(interval);
  })

  function handleLeftClick()
  {
    let p;
    if(pointer === 0)
    p = imgAddress.length-1;
    else
    p = pointer-1;
    setImage(imgAddress[p]);
    setPointer(p);
    setDirection("left");
    console.log("image",p,pointer," ",imgAddress[pointer]);
  }

  function handleRightClick()
  {
    let p;
    if(pointer === imgAddress.length-1)
    p = 0;
    else
    p = pointer+1;
    setImage(imgAddress[p]);
    setPointer(p);
    setDirection("right");
    console.log("image",p,pointer," ",imgAddress[pointer]);
  }

  return (
    <>
      <div style={{ width: "80vw", height: "80vh", display: "flex", justifyContent: "space-between"}}>
        <button
          style={{ width: "80px" }}
          onClick={() => handleLeftClick()}
        >
          {"<"}
        </button>
        <AnimatePresence>
          <motion.img key={pointer} src={image} alt="" style={{ width: "100%", height: "100%" }} variants={slideVariants}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit" />
        </AnimatePresence>
        <button
          style={{ width: "80px"}}
          onClick={() => handleRightClick()}
        >
          {">"}
        </button>
      </div>
    </>
  );
}
