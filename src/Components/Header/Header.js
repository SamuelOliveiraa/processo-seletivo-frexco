import style from "./Header.module.css";
import "../../index.css";
import { Link } from "react-router-dom";

import { BiCartAlt } from "react-icons/bi";
import IconHeader from "../IconHeader/IconHeader";
import ModalCart from "../ModalCart/ModalCart";

import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function Header({ cart, setCart }) {
  const [nav, setNav] = useState(null);
  const [cartState, setCartState] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    const list = document.querySelector(".list").children;

    for (let item of list) {
      item.children[0].classList.remove(`${style.active}`);
    }

    for (let i = 0; i < list.length; i++) {
      if (list[i].children[0].attributes["href"].nodeValue === pathname) {
        list[i].children[0].classList.add(`${style.active}`);
      }
    }
  }, [pathname]);

  function toggle() {
    if (nav === "") {
      return `${style.nav} + ${style.close}`;
    } else {
      return `${style.nav}`;
    }
  }

  function click() {
    if (cartState == null) {
      setCartState("");
    } else {
      setCartState(null);
    }
  }
  
  function checar() {
    console.log(window.innerWidth);
    if (window.innerWidth <= 600) {
      setNav(null);
    } else {
      setNav("");
    }
  }
  
  let cartLength = JSON.parse(localStorage.getItem("cart"));

  window.onload = () => {
    checar();
  };

  window.onresize = () => {
    checar();
  };

  return (
    <header className={`${style.header} + ${"flex_between"}`}>
      <div className={`${style.container} + ${"flex_between"}`}>
        <IconHeader nav={nav} setNav={setNav}></IconHeader>

        <h2>
          <Link to="/">HortFrut</Link>
        </h2>
      </div>

      <nav className={toggle()}>
        <div className={style.nav_container}>
          <ul className="list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className={`${style.icons} + flex_between`}>
        <BiCartAlt onClick={click} />

        <div className={style.cart_quantity}>
          {cartLength === null ? 0 : cartLength.length}
        </div>

        <ModalCart
          cartState={cartState}
          cart={cart}
          setCart={setCart}
        ></ModalCart>
      </div>
    </header>
  );
}

export default Header;
