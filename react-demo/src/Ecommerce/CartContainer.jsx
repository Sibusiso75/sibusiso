import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./cartContext";
// import Categories from "./Categories";
import "./cart.css";
// npx browserslist@latest --update-db - to update the browser
function CartContainer() {
  const { cart, total, clearCart, searchTerm, setSearchTerm } =
    useGlobalContext();

  if (cart.length === 0) {
    return (
      <div className="emptyBag">
        <h3>Your bag is currently empty</h3>
        <main className="totalAndClear">
          <span className="total">total - R{total}</span>
        </main>
      </div>
    );
  }

  function submit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h3 className="bag">Your bag</h3>
      <br />

      <form onSubmit={submit}>
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search..."
          className="inputSearch"
        />
      </form>
      {/* <button onClick={() => all()} className="clearbtn">
        All
      </button> */}
      {/* <Categories /> */}

      <main className="cartContainer">
        {cart
          .filter((item) => {
            return (
              item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
          })
          .map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
      </main>
      <br />

      <hr />

      <main className="totalAndClear">
        <span className="total">total - R{total}</span>

        <div>
          <button onClick={() => clearCart()} className="clearbtn">
            clear
          </button>
        </div>
      </main>
    </div>
  );
}

export default CartContainer;
