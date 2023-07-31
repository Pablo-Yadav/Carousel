import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EasyCarousel from "./components/EasyCarousel/EasyCarousel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MediumCarousel from "./components/MediumCarousel/MediumCarousel";
import HardCarousel from "./components/HardCarousel/HardCarousel";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "2rem",
        // justifySelf: "flex-end",
        justifyContent: "center",
        width: "96vw",
        position: "fixed",
        top: "0",
        padding: "2vw",
        backgroundColor: "white",
        zIndex: "5",
      }}
    >
      <NavLink
        to="/easy"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "red" : "black",
          };
        }}
      >
        Simple
      </NavLink>
      <NavLink
        to="/medium"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "red" : "black",
          };
        }}
      >
        Medium
      </NavLink>
      <NavLink
        to="/hard"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "red" : "black",
          };
        }}
      >
        Hard
      </NavLink>
    </nav>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<h1>Hello</h1>} />
          <Route path="/easy" element={<EasyCarousel />} />
          <Route path="/medium" element={<MediumCarousel />} />
          <Route path="/hard" element={<HardCarousel />} />
          <Route
            path="/unauth"
            element={
              <h1>
                You are Unauthorized to Enter this page as you have not logged
                in/ Signed Up
              </h1>
            }
          />
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
{
  /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
}
