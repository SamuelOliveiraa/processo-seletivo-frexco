import style from "./Search.module.css";
import { useState } from "react";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { AiOutlineSearch } from "react-icons/ai";

function Search({ cart, setCart }) {
  const [search, setSearch] = useState("");

  return (
    <div className={style.search}>
      <h2>Procure por uma fruta que você goste</h2>
      <div className={style.search_container}>
        <AiOutlineSearch />
        <input
          type="search"
          name="search"
          placeholder="O que você procura?"
          onInput={(e) => setSearch(e.target.value)}
        />
      </div>

      <CardsContainer
        url={search === "" ? "/all" : `/search?name=${search}`}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}

export default Search;
