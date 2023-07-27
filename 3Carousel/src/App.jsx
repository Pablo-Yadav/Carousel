import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carousel_easy from './easy'
import Carousel_medium from './medium.jsx'
import Carousel_hard from './hard'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className='Head'>
       
      <span>   </span>
      <NavLink
        to="/easy"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "black",
            fontWeight: isActive ? 700 : 200,
            fontSize:isActive ? "50px": "15px",
          };
        }}
      >
        Easy
      </NavLink>
      <span>        </span>
      <NavLink
        to="/medium"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "black",
            fontWeight: isActive ? 700 : 200,
            fontSize:isActive ? "50px": "15px",
          };
        }}
      >
        Medium
      </NavLink>
      <span>      </span>
      <NavLink
        to="/hard"
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "black",
            fontWeight: isActive ? 700 : 200,
            fontSize:isActive ? "50px": "15px",
          };
        }}
      >
        Hard
      </NavLink>
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/">
            <Route path="easy" element={<Carousel_easy />} />
            <Route path="medium" element={<Carousel_medium />} />
            <Route path="hard" element={<Carousel_hard />} >
            </Route>
            {/* <Route path="unauth" element={<h1> Create Account First! </h1>} /> */}
          
          <Route path="*" element = { <h1>404: page not found</h1>} />
          </Route>
        </Routes>
        
      </BrowserRouter>
      {/* <Carousel_easy/>
      <br/>

      <br/>
      <Carousel_medium/>
      <br/>

      <br/>
      <Carousel_hard/> */}

    </>
  )
}

export default App
