import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router,Route,Routes,Link,useNavigate } from "react-router-dom";
import Simple from './Simple/simple';
import Medium from './Medium/medium';
import Hard from './Hard/hard';
import FrameCarousel from './FrameCarousel/FrameCarousel';

function Navigation(){
  return(
    <div style={{display:"flex",gap:"2em",marginBottom:"10px"}}>
    <Link to="/simple">Simple</Link>
    <Link to="/medium">Medium</Link>
    <Link to="/hard">Hard</Link>
    <Link to="/Framer">Framer</Link>
    </div>
    

  );
}


function App() {
  

  return (

    <div style={{display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center"
    }}>
    <Navigation/>
     <Routes>
      <Route path="simple" element={<Simple/>}/>
      <Route path="medium" element={<Medium/>}/>
      <Route path="hard" element={<Hard/>}/>
      <Route path="Framer" element={<FrameCarousel/>}/>
     </Routes>
    </div>
  );
}

export default App
