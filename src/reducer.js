const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: []
    };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload)
    };
  }
  if (action.type === "INCREASE_AMT") {
    const tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return {
      ...state,
      cart: tempCart
    };
  }
  if (action.type === "DECREASE_AMT") {
    const tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: tempCart };
  }
  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;

        cartTotal.total += price * amount;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }

  return state;
};
export default reducer;
