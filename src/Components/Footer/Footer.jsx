import React from "react";
import "./Footer.css";
import card1 from "../../assets/Images/card1.png";
import card2 from "../../assets/Images/card2.png";
import card3 from "../../assets/Images/card3.png";
import card4 from "../../assets/Images/card4.png";

function Footer() {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content">
          <a href="#" className="footer__logo">
            <i className="ri-leaf-line footer__logo-icon"></i> Logo
          </a>

          <h3 className="footer__title">
            Subscribe to our newsletter <br />
            to stay update
          </h3>

          <div className="footer__subscribe">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer__input"
            />

            <button className="button button--flex footer__button">
              Subscribe
              <i className="ri-arrow-right-up-line button__icon"></i>
            </button>
          </div>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Our Address</h3>

          <ul className="footer__data">
            <li className="footer__information">Cairo</li>
            <li className="footer__information">Egypt</li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Contact Us</h3>

          <ul className="footer__data">
            <li className="footer__information">+20-123-456-7891</li>

            <div className="footer__social">
              <a href="#" target="_blank" className="footer__social-link">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="#" target="_blank" className="footer__social-link">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#" target="_blank" className="footer__social-link">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="#" target="_blank" className="footer__social-link">
                <i className="ri-twitter-fill"></i>
              </a>
            </div>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">We accept all credit cards</h3>

          <div className="footer__cards">
            <img src={card1} alt="" className="footer__card" />
            <img src={card2} alt="" className="footer__card" />
            <img src={card3} alt="" className="footer__card" />
            <img src={card4} alt="" className="footer__card" />
          </div>
        </div>
      </div>

      <p className="footer__copy">&#169; Ali Samir. All rights reserved</p>
    </footer>
  );
}

export default Footer;
