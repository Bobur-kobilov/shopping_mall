import axios from "axios";

const instance = axios.create({
  baseURL: "http://ec2-52-55-242-221.compute-1.amazonaws.com:2323"
});
export default instance;