import React from "react";
import { useGlobalContext } from "./cartContext";
import "./cart.css";
// import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

function CartItem({ id, details, title, price, image, amount }) {
  const { remove, increase, decrease } = useGlobalContext();

  return (
    <div style={{ margin: "25px", gap: "1rem" }}>
      <div className="itemsContainer">
        <img
          src={image}
          alt={title}
          style={{ width: "150px", height: "150px" }}
        />

        <div className="titlePriceAmount">
          <main> {title}</main>
          <main>{details}</main>
          <main>Price - R{price}</main>
          <main>Quantity - {amount}</main>
        </div>
      </div>
      <br />

      <section className="btns">
        <button onClick={() => increase(id)} style={{ color: "white" }}>
          ➕
        </button>
        <button onClick={() => remove(id)} style={{ color: "white" }}>
          🗑
        </button>

        <button onClick={() => decrease(id)} style={{ color: "white" }}>
          ➖
        </button>
      </section>
    </div>
  );
}

export default CartItem;
