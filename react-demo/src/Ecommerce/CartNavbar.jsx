import React from "react";
import { useGlobalContext } from "./cartContext";
// import { FaShoppingBag, FaHome, FaTasks } from "react-icons/fa";

import "./cart.css";

function Navbar() {
  const { amount, cart } = useGlobalContext();

  return (
    <div>
      <nav className="cartNav">
        <span className="h3">Cart</span>
        <main className="shoppingCartAmount">
          <button className="shoppingCart">🛒</button>
          <span className={cart.length > 0 ? "amount" : null}>
            {cart.length > 0 ? amount : null}
          </span>
        </main>
      </nav>
    </div>
  );
}

export default Navbar;
