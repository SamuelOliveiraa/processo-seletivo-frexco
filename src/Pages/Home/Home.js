import { useEffect } from "react";
import CardShoes from "../../Components/Card_Shoes/Card_Shoes";
import api from "../../Config/api";

function Home() {
   function click() {
    fetch(" https://www.fruityvice.com/api/fruit/all", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
  return (
    <>
      <CardShoes />
      <button onClick={click}>Clique aqui para dar um bug</button>
    </>
  );
}

export default Home;
