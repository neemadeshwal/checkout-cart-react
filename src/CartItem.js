import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./context";
const CartItem = ({ id, img, price, title, amount }) => {
  const { remove, IncreaseCount, DecreaseCount } = useGlobalContext();

  return (
    <article key={id} className="cart-content">
      <img src={img} alt={title} />
      <div>
        <h3 className="title">{title}</h3>
        <p className="price">${price}</p>
        <button className="remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>

      <div>
        <button
          className="chevron chevron-up"
          onClick={() => IncreaseCount(id)}
        >
          <FaChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="chevron chevron-down"
          onClick={() => DecreaseCount(id)}
        >
          <FaChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
