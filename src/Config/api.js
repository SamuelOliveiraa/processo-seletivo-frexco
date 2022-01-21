import axios from "axios";

export default axios.create({
    baseURL: "https://api-processo-seletivo-frexco.herokuapp.com/"
})