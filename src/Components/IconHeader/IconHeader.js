import style from "./IconHeader.module.css";

function IconHeader({ nav, setNav }) {
  function click() {
    if (nav === null) {
      setNav("");
      toggle();
    } else {
      setNav(null);
      toggle();
    }
  }

  function toggle() {
    if (nav === "") {
      return `${style.icon} + ${style.close}`;
    } else {
      return `${style.icon}`;
    }
  }
  return (
    <nav className={toggle()} onClick={click}>
      <span className={`${style.line} ${style.line1}`}></span>
      <span className={`${style.line} ${style.line2}`}></span>
      <span className={`${style.line} ${style.line3}`}></span>
    </nav>
  );
}

export default IconHeader;
