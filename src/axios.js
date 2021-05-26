import axios from "axios";


const instance = axios.create({
    baseURL : " https://lit-dawn-43856.herokuapp.com/"
    //baseURL : "http://localhost:5000"
});

export default instance;      