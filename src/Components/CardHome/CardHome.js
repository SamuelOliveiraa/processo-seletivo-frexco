import style from './CardHome.module.css'

import { Link } from "react-router-dom";
import shoesMen from '../../images/air-max-90.png'
import shoesWomen from '../../images/air-force-pink.png'

function Banner_Home({big, span, h2}) {
  return(
    <div className={big === ''? style.container : `${style.container} ${style.big}`}>
        <div className={style.banner}>
            <div className={style.content}>
                <div className={style.text}>
                    <span>
                        {span}
                    </span>
                    <h2>
                        {h2}
                    </h2>
                    <Link to='/men'>
                        Discover More
                    </Link>
                </div>

                <div className={style.img_container}>
                    <img src={shoesMen} alt="Shoes" />
                </div>
            </div>
        </div>
        
        <div className={style.banner}>
            <div className={style.content}>
                <div className={style.text}>
                    <span>
                        Season Offer
                    </span>
                    <h2>
                        For Women
                    </h2>
                    <Link to='/women'>
                        Discover More
                    </Link>
                </div>

                <div className={style.img_container}>
                    <img src={shoesWomen} alt="Shoes" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Banner_Home;