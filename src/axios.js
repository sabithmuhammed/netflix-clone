import axios from "axios";
import { baseURL } from "./constants/constants";
const instance = axios.create({
    baseURL
})
export default instance