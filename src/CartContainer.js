import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section>
        <header className="cart-heading-container">
          <h4>Your Bag</h4>

          <p className="empty-cart">is currently empty</p>
        </header>
      </section>
    );
  }
  return (
    <section>
      <header className="cart-heading-container">
        <h4>Your Bag</h4>
      </header>
      <div className="cart-main-container">
        <div className="cart-item">
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
      </div>
      <footer>
        <hr />
        <div>
          <div className="cart-total">
            <h5>
              Total<span className="total-price">${total}</span>
            </h5>
            <button className="clear-cart-btn" onClick={clearCart}>
              clear cart
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
