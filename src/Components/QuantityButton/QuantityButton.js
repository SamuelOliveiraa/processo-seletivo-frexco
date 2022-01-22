import style from "./QuantityButton.module.css";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useEffect, useState } from "react";

function Quantity_Button({ id, cart, currentItens, setCurrentItens, page}) {
  useEffect(() => {
    cart.map((item, index) => {
      if (item.id === id) {
        setCurrentItens(item.itens);
      }
    });
  }, []);

  function decrease() {
    if (currentItens !== 0) {
      let itemValue = currentItens;
      itemValue = itemValue - 1;
      setCurrentItens(itemValue);
    }
  }
  function increase() {
    let itemValue = currentItens;
    itemValue = itemValue + 1;
    setCurrentItens(itemValue);
  }

  return (
    <div className={style.quantity}>
      <div className={style.minus} onClick={page !== true && decrease}>
        <BiMinus></BiMinus>
      </div>
      <div className={style.number}>{currentItens}</div>
      <div className={style.plus} onClick={page !== true && increase}>
        <BiPlus></BiPlus>
      </div>
    </div>
  );
}

export default Quantity_Button;
