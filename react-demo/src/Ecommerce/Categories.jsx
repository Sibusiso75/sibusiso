import React from "react";
import { useGlobalContext } from "./cartContext";

function Categories(category) {
  const { filterLaptops, filterMobiles, filterPrinters } = useGlobalContext();
  return (
    <div>
      <main style={{ display: "flex", gap: "1rem" }}>
        <button
          onClick={() => filterMobiles(category)}
          style={{ background: "orange" }}
        >
          Mobiles
        </button>
        <button
          onClick={() => filterLaptops(category)}
          style={{ background: "orange" }}
        >
          Laptops
        </button>
        <button
          onClick={() => filterPrinters(category)}
          style={{ background: "orange" }}
        >
          Printers
        </button>
      </main>
    </div>
  );
}
export default Categories;
