import { useState } from 'react'

import Button from '@mui/material/Button';

const myArrayLinks=["https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
"https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
"https://image.tmdb.org/t/p/original/m8JTwHFwX7I7JY5fPe4SjqejWag.jpg",
"https://image.tmdb.org/t/p/original//8rpDcsfLJypbO6vREc0547VKqEv.jpg",
"https://image.tmdb.org/t/p/original///4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
"https://image.tmdb.org/t/p/original//qWQSnedj0LCUjWNp9fLcMtfgadp.jpg"
];

export default function Medium(){
    
        let [index,setIndex]=useState(0);
    
    
    function handlePrevClick(){
        
        console.log(index);
        if(index!==0){
        let ind=index-1;
        setIndex(ind);
        }
        else{
           let ind=myArrayLinks.length-1;
           setIndex(ind);
        }
    }

    function handleNextClick(){
        
        console.log(index);
         if(index!==myArrayLinks.length-1){
            
             let ind=index+1;
             setIndex(ind);
         }else{
             
             let ind=0;
             setIndex(ind);
         }
    }
    return(
        <div style={{display:"flex",gap:"2em"}}>
            <Button variant="contained" onClick={handlePrevClick} >{"<"}</Button>
             <img style={{width:"40vw",height:"40vh"}}src={myArrayLinks[index]}/>
            <Button variant="contained" onClick={handleNextClick} >{">"}</Button>

        </div>
    );
}