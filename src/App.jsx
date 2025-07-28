import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx"
import Pokedex from "./Pokedex.jsx"
import "./App.css"

const App = () => (
  <>
    <BrowserRouter>
      <NavigationBar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/pokedex" element={<Pokedex />}/>
        </Routes>
      </div>
    </BrowserRouter>
  </>
);

const NavigationBar = () => (
  <nav> 
    <Link to="/">Home</Link>
    <Link to="/pokedex">Pokedex</Link>
  </nav>
);
  
export default App;