import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./components/Restaurant.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home.js";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import SearchFood from "./components/SearchFood.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/restaurant" element={<Restaurant />}></Route>
        <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
        <Route path ="/city/delhi/:id/search" element={<SearchFood/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
