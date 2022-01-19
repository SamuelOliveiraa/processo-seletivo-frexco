import style from './Button.module.css'

import { Link } from "react-router-dom";

function Button({icon, text, to}) {
    return(
        <Link to={to} className={`${style.button} + flex_center + btn`}>
            <div className={style.icon}>
                {icon}
            </div>
            <div className={style.text}>
                {text}
            </div>
        </Link>
    )
}

export default Button