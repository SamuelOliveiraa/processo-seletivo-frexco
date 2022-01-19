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
      <div className={style.header}>
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

      <div className={style.list}>
        <ul>
          <li>Pages</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Colections Men</li>
          <li>NMD</li>
          <li>Air Force</li>
          <li>Everlast Haze</li>
          <li>Air Max</li>
          <li>Modare Knit</li>
          <li>Air Jordan</li>
          <li>Nike SB</li>
        </ul>
        <ul>
          <li>Colections Women</li>
          <li>NMD</li>
          <li>Air Force</li>
          <li>Everlast Haze</li>
          <li>Air Max</li>
          <li>Modare Knit</li>
          <li>Air Jordan</li>
          <li>Nike SB</li>
        </ul>
        <ul>
          <li>Contact</li>
          <li>(+55)1182927182</li>
          <li>example23@gmail.com</li>
          <li>support@hotmail.com</li>
          <li> 4383 Longview Avenue Queens, NY</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
