import axios from 'axios';

let DjangoServerUrl = "http://127.0.0.1:8000/"; // Server URL


let axiosApi = axios.create({               // instance
    baseURL: DjangoServerUrl,
    headers: { "Content-Type": "application/json" }
})


export default axiosApi;