import React from 'react'
import ReactDOM from 'react-dom/client'
import Easy from './Easy.jsx'
import Medium from './Medium.jsx'
import Hard from './Hard.jsx'
import FramerMotionCarousal from './FramerMotionCarousal.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="easy" element={<Easy />}/>
          <Route path="medium" element={<Medium />}/>
          <Route path="hard" element={<Hard />}/>
          <Route path="carousal" element={<FramerMotionCarousal />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
