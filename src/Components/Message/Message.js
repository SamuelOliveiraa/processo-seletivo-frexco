import style from "./Message.module.css";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";

function Message({ msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {visible && (
        <div className={style.message}>
            <h2>
                Lembrando que esta página é apenas um prototipo não é possivel interagir ou realizar nenhuma pagamaneto atraves dela
            </h2>

            <Loader/>
        </div>
      )}
    </>
  );
}

export default Message;
