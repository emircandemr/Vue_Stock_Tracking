import axios from "axios";

const baseHTTP = axios.create({
  baseURL: 'https://api2.binance.com/api/v3/ticker/24hr'
});

export default baseHTTP;
