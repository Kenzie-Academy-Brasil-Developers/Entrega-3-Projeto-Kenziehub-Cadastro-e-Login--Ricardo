import axios from "axios";

const token = localStorage.getItem("@TOKEN");

export const api = axios.create({
    baseURL: "https://kenziehub.herokuapp.com",
    headers: {'Authorization': `Bearer ${token}`,
    timeout: 8000}
})