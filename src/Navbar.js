import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav className="navbar-container">
      <div className="navbar-center">
        <h3 className="heading">UseReducer</h3>
        <div className="cart-container">
          {/* <FaCart/> */}
          <FaShoppingCart />

          <div className="amount-container">
            <p>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
