import axios from "axios";
const instance = axios.create({
  baseURL: "http://ec2-52-55-242-221.compute-1.amazonaws.com:2323"
  // baseURL: "http://localhost:2323"
});
instance.interceptors.request.use(function(configs){
  console.log("AXIOS CONFIGS");
  console.log(configs.data);
  return configs
})
export default instance;