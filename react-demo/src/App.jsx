import React from "react";
import "./App.css";
import Navbar from "./Ecommerce/CartNavbar";
import CartContainer from "./Ecommerce/CartContainer";
import { useGlobalContext } from "./Ecommerce/cartContext";
import "./eco.css";
// import "./logo.svg";
function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
