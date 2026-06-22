import React from 'react';
import ReactDOM from "react-dom/client"
import Header from './components/Header.js';
import FoodOption from './components/FoodOption.js';
import GroceryOptions from './components/GroceryOptions.jsx';
function App(){
    return (
    <>
    <Header/>
    <FoodOption/>
    <GroceryOptions/>
    </>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);