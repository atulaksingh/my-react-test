import axios from "axios";
const API = axios.create({
  baseURL:
    "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/",

  headers: {
    Authorization: "Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo",
  },
});

export const getproduct = () => API.get(`/products`);

export const getColor = (id) => API.get(`/colors/${id}`);
export const getMaterial = (id) => API.get(`/material/${id}`);

export const getAllColor = (id) => API.get(`/colors`);
export const getAllMaterial = (id) => API.get(`/material`);
