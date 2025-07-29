import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home"
import Pokedex from "./Pokedex"
import Search from "./Search"
import "../css/App.css"

const App = () => (
  <>
    <BrowserRouter>
      <NavigationBar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/pokedex" element={<Pokedex />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
      </div>
    </BrowserRouter>
  </>
);

const NavigationBar = () => (
  <nav> 
    <Link to="/">Home</Link>
    <Link to="/pokedex">Pokedex</Link>
    <Link to="/search">Search</Link>
  </nav>
);
  
export default App;