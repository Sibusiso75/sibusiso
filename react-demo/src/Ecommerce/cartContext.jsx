import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import reducer from "./cartReducer";

const initialState = {
  cart: [],
  total: 0,
  amount: 0,
  loading: true,
};

const AppContext = createContext();
function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchTerm, setSearchTerm] = useState("");

  function remove(id) {
    dispatch({ type: "REMOVE", payload: id });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  function increase(id) {
    dispatch({ type: "INCREASE", payload: id });
  }
  function decrease(id) {
    dispatch({ type: "DECREASE", payload: id });
  }

  async function all() {
    const response = await fetch("http://localhost:5003/ecommerceProducts");
    const cart = await response.json();
    dispatch({ type: "ALL", payload: cart });
  }
  // function filterLaptops() {
  //   dispatch({ type: "FILTER_LAPTOPS", payload: "laptop" });
  // }
  // function filterMobiles() {
  //   dispatch({ type: "FILTER_MOBILES", payload: "mobile" });
  // }
  // function filterPrinters() {
  //   dispatch({ type: "FILTER_PRINTERS", payload: "printer" });
  // }

  async function fetchData() {
    dispatch({ type: "LOADING" });
    const response = await fetch("http://localhost:5003/ecommerceProducts");
    const cart = await response.json();
    dispatch({ type: "DISPAY_ITEMS", payload: cart });
    console.log(cart);
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "TOTALS" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        // filterLaptops,
        // filterMobiles,
        // filterPrinters,

        remove,
        clearCart,
        increase,
        decrease,
        all,

        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
