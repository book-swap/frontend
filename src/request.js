import axios from "axios";
import store from "./store";

// API URL
axios.defaults.baseURL = process.env.API_URL;

// Set JWT token header if token is set inside the state
if (store.state.token !== undefined)
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + store.state.token;

export default axios;
