import style from './QuantityButton.module.css'
import { BiPlus, BiMinus } from "react-icons/bi";

function Quantity_Button({itens, setItens}) {
    
    function decrease(){
        itens === 0 ? itens = 0 : setItens(itens = itens - 1)
    }
    function increase(){
        setItens(itens += 1)
    }
  return(
    <div className={style.quantity}>
        <div className={style.minus}  onClick={decrease}>
            <BiMinus></BiMinus>
        </div>
        <div className={style.number}>
            {itens}
        </div>
        <div className={style.plus} onClick={increase}>
            <BiPlus></BiPlus>
        </div>
</div>
  );
}

export default Quantity_Button;