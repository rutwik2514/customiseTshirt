import React from 'react'
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Tshirt from './Components/Tshirt';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Tshirt />} /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App