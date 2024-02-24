import React from "react";
import NavLogo from "../assets/logo.png";
import ProductImg from "../assets/product-img.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="nav__container">
          <a href="/">
            <img src={NavLogo} alt="" className="nav__logo" />
          </a>
          <div className="nav__links">
            <a href="/products" className="nav__link">
              Products
            </a>
            <button className="nav__cart">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="nav__cart__icon"
              />
              <span className="cart__length">4</span>
            </button>
            <button className="nav__menu">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </nav>

      <nav className="menu">
        <button className="menu__close">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="menu__links">
          <a href="/" className="menu__link">
            Home
          </a>
          <a href="/products" className="menu__link">
            Products
          </a>
          <button className="menu__link menu__cart">Cart</button>
        </div>
      </nav>

      <div className="cart__wrapper">
        <nav className="cart">
            <div className="cart__header">
                <h3 className="cart__header__title">
                    Your Shopping Cart
                </h3>
                <button className="cart__header__close">
                    <FontAwesomeIcon icon={faTimes}/>
                </button>
            </div>
            <div className="cart__items">
                <div className="cart__item">
                    <div className="cart__item__left">
                        <img src={ProductImg} alt="" className="cart__item__img" />
                    </div>
                    <div className="cart__item__mid">
                        <h4 className="cart__item__title">
                            Pulp Unit -5 Compartments
                        </h4>
                        <span className="cart__item__price">
                            $254
                        </span>
                        <div className="cart__item__quantity">
                            <button className="cart__item__quantity__btn">
                                -
                            </button>
                            <span className="cart__item__quantity__amount">
                                1
                            </span>
                            <button className="cart__item__quantity__btn">
                                +
                            </button>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faTimes} className="cart__item__remove"/>
                </div>
            </div>
            <div className="cart__footer">
                <div className="cart__footer__details">
                    <h4 className="cart__footer__title">
                        Subtotal
                    </h4>
                    <span className="cart__footer__subtotal">
                        $254
                    </span>
                </div>
                <button className="cart__footer__btn">
                    Go to checkout
                </button>
            </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;

