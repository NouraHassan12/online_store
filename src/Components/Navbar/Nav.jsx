import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import "./Nav.css";
import { connect } from "react-redux";
import { getTotals } from "../../Redux/Cart/cart";
import { HashLink } from "react-router-hash-link";

function Nav({ CartData, getTotals }) {
  const [showMenu, setShowMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  const [hideSideMenu, setHideSideMenu] = useState(false);
  const [showShoppingCart, setShoppingCart] = useState(false);

  useEffect(() => {
    getTotals();
  }, [CartData]);
  const HandleShowMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setCloseMenu(false);
    setShowMenu(false);
  };
  // When we click on each navlink, we remove the hide sideMenu in Mobile
  const handlehideSideMenu = () => {
    setHideSideMenu(true);
    setShowMenu(false);
  };

  const HandleShoppingCart = () => {
    setShoppingCart(true);
  };

  const handleCloseShoppingCart = () => {
    setShoppingCart(false);
  };
  return (
    <header className="header">
      <nav className="nav container">
        <a className="nav__logo">logo</a>

        <div
          className={
            showMenu && !closeMenu
              ? "nav__menu show-menu"
              : hideSideMenu && showMenu
              ? "nav__menu"
              : "nav__menu"
          }
        >
          <ul className="nav__list">
            <li>
              {" "}
              <HashLink
                smooth
                to="/#home"
                className="nav__link"
                onClick={handlehideSideMenu}
              >
                Home
              </HashLink>
            </li>
            <li className="nav__link">
              {" "}
              <HashLink
                smooth
                to="/#about"
                className="nav__link"
                onClick={handlehideSideMenu}
              >
                {" "}
                about{" "}
              </HashLink>
            </li>
            <li className="nav__link">
              {" "}
              <HashLink
                smooth
                to="/#products"
                className="nav__link"
                onClick={handlehideSideMenu}
              >
                Products
              </HashLink>
            </li>
            <li className="nav__link">
              {" "}
              <HashLink
                smooth
                to="/#FAQs"
                className="nav__link"
                onClick={handlehideSideMenu}
              >
                FAQs
              </HashLink>
            </li>
            <li className="nav__link">
              {" "}
              <HashLink
                smooth
                to="/#contactUs"
                className="nav__link"
                onClick={handlehideSideMenu}
              >
                Contacts
              </HashLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={handleCloseMenu}>
            <i className="ri-close-line"></i>
          </div>
        </div>
        <div className={showShoppingCart ? "shopping__cart" : ""}>
          {showShoppingCart && <Cart />}
          {showShoppingCart && (
            <div className="cart__close" onClick={handleCloseShoppingCart}>
              <i className="ri-close-line"></i>
            </div>
          )}
        </div>
        <div className="nav__btns">
          <div className="nav__toggle" onClick={HandleShowMenu}>
            <i className="ri-menu-line"></i>
          </div>

          <button
            onClick={HandleShoppingCart}
            type="button"
            className="position-relative"
            style={{
              background: "none",
            }}
          >
            <i className="ri-shopping-cart-2-line"></i>
            <span
              style={{ backgroundColor: "#406856" }}
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {CartData.cartTotalQuantity}{" "}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    CartData: state.cart,
  };
};
export default connect(mapStateToProps, { getTotals })(Nav);
