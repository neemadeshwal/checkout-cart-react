import React from "react";
import cartItems from "./Data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const IncreaseCount = (id) => {
    dispatch({ type: "INCREASE_AMT", payload: id });
  };
  const DecreaseCount = (id) => {
    dispatch({ type: "DECREASE_AMT", payload: id });
  };
  React.useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, remove, IncreaseCount, DecreaseCount }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return React.useContext(AppContext);
};
export { useGlobalContext, AppProvider };
