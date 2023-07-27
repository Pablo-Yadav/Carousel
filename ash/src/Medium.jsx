import * as React from 'react';

export default function Medium() {
  let imgAddress = [
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
    "https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    "https://image.tmdb.org/t/p/original/m8JTwHFwX7I7JY5fPe4SjqejWag.jpg",
    "https://image.tmdb.org/t/p/original//8rpDcsfLJypbO6vREc0547VKqEv.jpg",
    "https://image.tmdb.org/t/p/original///4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    "https://image.tmdb.org/t/p/original//qWQSnedj0LCUjWNp9fLcMtfgadp.jpg"
  ];
  const [pointer, setPointer] = React.useState(0);
  const [image, setImage] = React.useState(imgAddress[pointer]);

  function handleLeftClick()
  {
    let p;
    if(pointer === 0)
    p = imgAddress.length-1;
    else
    p = pointer-1;
    setImage(imgAddress[p]);
    setPointer(p);
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
    console.log("image",p,pointer," ",imgAddress[pointer]);
  }

  return (
    <>
      <div style={{ width: "50vw", display: "flex", justifyContent: "space-between"}}>
        <button
          style={{ width: "80px" }}
          onClick={() => handleLeftClick()}
        >
          {"<"}
        </button>
        <img src={image} alt="" style={{ width: "100%", height: "auto" }} />
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
