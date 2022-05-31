import axios from "axios";

const api = axios.create({
    
    baseURL: process.env.REACT_APP_HOST_APIURL,

});

export default api