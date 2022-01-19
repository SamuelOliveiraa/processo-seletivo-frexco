import style from "./Header.module.css";
import "../../index.css";
import { Link } from "react-router-dom";

import Images from "../Imagens/Imagens";
import { BiCartAlt } from "react-icons/bi";
import IconHeader from "../Icon_Header/Icon_Header";
import ModalCart from "../Modal_Cart/Modal_Cart";

import { useState } from "react";

function Header({ cart, setCart }) {
  const [nav, setNav] = useState(null);
  const [cartState, setCartState] = useState("");

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

  function change(e) {
    function currentPage() {
      for (let i = 0; i < e.target.parentNode.parentNode.children.length; i++) {
        e.target.parentNode.parentNode.children[i].children[0].classList.remove(
          `${style.active}`
        );
      }
      e.target.classList.add(`${style.active}`);
    }
    checar();
    currentPage();
  }

  function checar() {
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
          <ul>
            <li>
              <Link to="/" onClick={change} className={style.active}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/men" onClick={change}>
                Men
              </Link>
            </li>
            <li>
              <Link to="/women" onClick={change}>
                Women
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={change}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={change}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className={`${style.icons} + flex_between`}>
        <BiCartAlt onClick={click} />

        <div className={style.cart_quantity}>
          {cartLength === null ? 0 : cartLength.length}
        </div>

        <Images src="avatar"></Images>

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
