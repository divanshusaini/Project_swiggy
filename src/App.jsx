import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./components/Restaurant.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home.js";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import SearchFood from "./components/SearchFood.jsx";
import RestHeader from "./components/RestHeader.jsx";
import SecondaryHome from "./components/SecondaryHome.jsx";
import Checkout from "./components/Checkout.jsx";
import { store } from "./store/stores.jsx";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route element={<SecondaryHome/>}>
        <Route path="/restaurant" element={<Restaurant />}></Route>
        <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
        <Route path ="/city/delhi/:id/search" element={<SearchFood/>}></Route></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
      
    </BrowserRouter>
    </Provider>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
