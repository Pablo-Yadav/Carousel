import * as React from 'react';

export default function Easy() {
  let imgAddress = [
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
    "https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    "https://image.tmdb.org/t/p/original/m8JTwHFwX7I7JY5fPe4SjqejWag.jpg",
    "https://image.tmdb.org/t/p/original//8rpDcsfLJypbO6vREc0547VKqEv.jpg",
    "https://image.tmdb.org/t/p/original///4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    "https://image.tmdb.org/t/p/original//qWQSnedj0LCUjWNp9fLcMtfgadp.jpg"
  ];
  let [pointer, setPointer] = React.useState(0);
  const [image, setImage] = React.useState(imgAddress[pointer]);
  const [leftcondition, setLeftCondition] = React.useState((pointer === 0) ? true : false), [rightcondition, setRightCondition] = React.useState((pointer === imgAddress.length-1) ? true : false);

  function handleLeftClick()
  {
    let p=pointer-1;
    if(p <= 0)
    {
      setLeftCondition(true);
      setImage(imgAddress[p]);
      setPointer(0);
    }
    else if(p >= imgAddress.length-1)
    {
      setRightCondition(true);
      setImage(imgAddress[p]);
      setPointer(imgAddress.length-1);
    }
    else {
      setLeftCondition(false);
      setRightCondition(false);
      setImage(imgAddress[p]);
      setPointer(p);
    }
    console.log("image",p,pointer," ",imgAddress[pointer]);
  }

  function handleRightClick()
  {
    let p=pointer+1;
    if(p <= 0)
    {
      setLeftCondition(true);
      setImage(imgAddress[p]);
      setPointer(0);
    }
    else if(p >= imgAddress.length-1)
    {
      setRightCondition(true);
      setImage(imgAddress[p]);
      setPointer(imgAddress.length-1);
    }
    else {
      setLeftCondition(false);
      setRightCondition(false);
      setImage(imgAddress[p]);
      setPointer(p);
    }
    console.log("image",p,pointer," ",imgAddress[pointer]);
  }

  return (
    <>
      <div style={{ width: "50vw", display: "flex", justifyContent: "space-between"}}>
        <button
          style={{ width: "80px" }}
          onClick={() => handleLeftClick()}
          disabled={leftcondition}
        >
          {"<"}
        </button>
        <img src={image} alt="" style={{ width: "100%", height: "auto" }} />
        <button
          style={{ width: "80px"}}
          onClick={() => handleRightClick()}
          disabled={rightcondition}
        >
          {">"}
        </button>
      </div>
    </>
  );
}
