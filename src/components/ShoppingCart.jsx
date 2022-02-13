import React, { useState } from "react";
// utilizez hooks-ul useState
import { ReactComponent as Cart } from "../assets/icons/cart.svg";
import "../components/ShoppingCart.scss";

function ShoppingCart() {
  const [number, setNumber] = useState(0);
  // number este state-ul initial, setNumber este metoda de modificare a state-ului initial
  return (
    <div className="shopping-cart">
      <div className="icon">
        <p className="counter">{number}</p>
        <div className="cart-buttons">
          <Cart />
          <div className="buttons">
            <button
              className="btn btn-outline-danger"
              type="button"
              onClick={() => setNumber(number - 1)}
            >
              -
            </button>
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={() => setNumber(number + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
