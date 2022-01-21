import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  FaFacebookMessenger,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className={style.list}>
        <ul>
          <li>Formas de Pagamento</li>
          <ul>
            <li>
              <img src="http://localhost:3002/files/visa-card.png" alt="" />
            </li>
            <li>
              <img src="http://localhost:3002/files/mastercard.png" alt="" />
            </li>
            <li>
              <img src="http://localhost:3002/files/elo-card.png" alt="" />
            </li>
            <li>
              <img
                src="http://localhost:3002/files/amricanas-card.png"
                alt=""
              />
            </li>
            <li>
              <img src="http://localhost:3002/files/diners-card.png" alt="" />
            </li>
            <li>
              <img src="http://localhost:3002/files/discover-card.png" alt="" />
            </li>
            <li>
              <img src="http://localhost:3002/files/jcb-card.png" alt="" />
            </li>
          </ul>
        </ul>
      </div>
      <div className={`${style.header} flex_between`}>
        <h1>HortFrut</h1>

        <div className={style.icons}>
          <a
            href="https://github.com/samueloliveiraa"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-oliveira-de-ara%C3%BAjo-473254191/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/samuka.oliveira0/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
