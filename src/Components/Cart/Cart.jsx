import React, { useEffect } from "react";
import "./Cart.css";
import { connect } from "react-redux";
import {
  getTotals,
  decreaseCart,
  addToCart,
  clearCart,
} from "../../Redux/Cart/cart";

function Cart({ CartData, getTotals, decreaseCart, addToCart, clearCart }) {
  console.log(CartData, "CartData");

  useEffect(() => {
    getTotals();
  }, [CartData]);

  const handleAddToCart = (item) => {
    addToCart(item);
  };
  const handleDecreaseCart = (item) => {
    decreaseCart(item);
  };
  const handleClearCArt = () => {
    clearCart();
  };
  return (
    <div className="container">
      <div className="shopping-cart">
        <div className="shopping-cart-header">
          <i className="fa fa-shopping-cart cart-icon"></i>
          <span className="badge">{CartData.cartTotalQuantity}</span>
          <div className="shopping-cart-total">
            <span className="lighter-text">Total:</span>
            <span className="main-color-text">
              {" "}
              ${CartData.cartTotalAmount}
            </span>
          </div>
        </div>

        <ul className="shopping-cart-items">
          {CartData.cartItems.map((item, index) => (
            <>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <li key={index} className="clearfix">
                  <img
                    src={item.product__img}
                    alt="item1"
                    className="item__img"
                  />
                </li>
                <div>
                  <span className="item-name">{item.product__title}</span>
                </div>
                <div
                  className="cart_quantity"
                  style={{
                    width: "73px",
                    height: "30px",
                    border: " 1px solid black",
                    maxWidth: "100% !important",
                    borderRadius: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <button
                    style={{
                      background: "none",
                      margin: "2px 10px",
                      fontSize: "17px",
                    }}
                    onClick={() => handleDecreaseCart(item)}
                  >
                    -
                  </button>
                  <span>{item.cartQuantity}</span>
                  <button
                    style={{
                      background: "none",
                      margin: "2px 10px",
                      fontSize: "17px",
                    }}
                    onClick={() => handleAddToCart(item)}
                  >
                    +
                  </button>
                </div>

                <div>
                  <span className="cartProductTotalPrice">
                    ${item.product__price * item.cartQuantity}
                  </span>
                </div>
              </div>
            </>
          ))}
        </ul>
        {CartData.cartItems.length > 0 && (
          <a className="button" onClick={() => handleClearCArt()}>
            Clear Cart
          </a>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    CartData: state.cart,
  };
};
export default connect(mapStateToProps, {
  getTotals,
  decreaseCart,
  addToCart,
  clearCart,
})(Cart);
