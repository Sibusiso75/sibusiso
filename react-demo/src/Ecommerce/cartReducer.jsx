function reducer(state, action) {
  if (action.type === "CLEAR_CART") {
    return { cart: [] };
  }
  // if (action.type === "FILTER_LAPTOPS") {
  //   return {
  //     cart: state.cart.filter((item) => item.category === action.payload),
  //   };
  // }
  // if (action.type === "FILTER_MOBILES") {
  //   return {
  //     cart: state.cart.filter((item) => item.category === action.payload),
  //   };
  // }
  // if (action.type === "FILTER_PRINTERS") {
  //   return {
  //     cart: state.cart.filter((item) => item.category === action.payload),
  //   };
  // }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }
  if (action.type === "ALL") {
    return { ...state, cart: action.payload, loading: false };
  }

  if (action.type === "REMOVE") {
    const itemRemoved = state.cart.filter((item) => item.id !== action.payload);

    return {
      cart: itemRemoved,
    };
  }

  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);

    return { ...state, cart: tempCart };
  }
  if (action.type === "TOTALS") {
    let { amount, total } = state.cart.reduce(
      (cartTotal, cartItem) => {
        cartTotal.amount = cartTotal.amount + cartItem.amount;
        cartTotal.total = cartTotal.total + cartItem.price * cartItem.amount;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  return state;
}

export default reducer;
