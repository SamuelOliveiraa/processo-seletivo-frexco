import style from './Card_Shoes.module.css'

import Button from '../Button/Button'
import { BiCartAlt } from "react-icons/bi";

function CardShoes({src1, title, price, old, id, gen, cart, setCart,colors,sizes}) {
    
    function addCart() {
        let cartString = JSON.stringify(cart)

        if(localStorage.getItem('cart') === null){
            localStorage.setItem('cart', cartString)
        }else{
            cartString = JSON.parse(localStorage.getItem('cart'))
            setCart(cartString)
        }
        
        if(cart.length === 0){
            let newCart = {
                id: id,
                title: title,
                src: src1,
                price: price,
                itens: 1,
                genre: gen,
                size: '38',
                colors: colors,
                sizes: sizes
            }

            cart.push(newCart)
            cartString = JSON.stringify(cart)

            if(localStorage.getItem('cart') === null ){
                localStorage.setItem('cart', cartString)
            }else{
                localStorage.setItem('cart', cartString)
            }
        }else{
            let ref = 0
            cart.map((item) => {
                if(item.id === id && item.genre === gen){
                    item.itens = 1
                    cartString = JSON.stringify(cart)
    
                    if(localStorage.getItem('cart') === null ){
                        localStorage.setItem('cart', cartString)
                    }else{
                        localStorage.setItem('cart', cartString)
                    }
                    ref = 1
                }
                console.log(item)
                console.log(id)
                console.log(gen)
            })
            if(ref === 0){
                let newCart = {
                    id: id,
                    title: title,
                    src: src1,
                    price: price,
                    itens: 1,
                    genre: gen,
                    size: '38',    
                    colors: colors,
                    sizes: sizes
                }
                cart.push(newCart)
                cartString = JSON.stringify(cart)

                if(localStorage.getItem('cart') === null ){
                    localStorage.setItem('cart', cartString)
                }else{
                    localStorage.setItem('cart', cartString)
                }
            }
        }

    }

    return(
        <div className={style.card}>
            <div className={style.img_container}>
                <img src={src1} alt="" />
            </div>

            <div className={style.text}>
                <h2>
                    {title}
                </h2>

                <div className={style.text_container}>
                    <p className={style.price}>
                        <span className={style.old_price}>
                            {Number(old).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                        </span>
                        {Number(price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} 
                    </p>

                    <div className={style.button_container} onClick={addCart}>
                        <Button
                        text="Add to cart"
                        icon={<BiCartAlt></BiCartAlt>}
                        to={`${gen === 'men'? '/men' :'/women'}`} 
                        ></Button>
                    </div>
                </div>

                <Button 
                    text="Read More" 
                    icon=''
                    to={`${gen === 'men'? '/product/men/'+ id :'/product/women/' + id}`} className={style.button}>
                </Button>
            </div>

            <div className={`${style.discount} + flex_center`}>
                {Math.round(((Number(old) - Number(price)) / price) * 100)}%
            </div>
        </div>
    )
}

export default CardShoes