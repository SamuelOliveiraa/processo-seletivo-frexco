import style from "./QuantityButton.module.css";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useEffect } from "react";

function QuantityButton({ id, cart, currentItens, setCurrentItens, page }) {
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
      {page !== true ? (
        <>
          <div className={style.minus} onClick={decrease}>
            <BiMinus></BiMinus>
          </div>
          <div className={style.number}>{currentItens}</div>
          <div className={style.plus} onClick={increase}>
            <BiPlus></BiPlus>
          </div>
        </>
      ) : (
        <>
          <div className={style.minus}>
            <BiMinus></BiMinus>
          </div>
          <div className={style.number}>{currentItens}</div>
          <div className={style.plus}>
            <BiPlus></BiPlus>
          </div>
        </>
      )}
    </div>
  );
}

export default QuantityButton;
