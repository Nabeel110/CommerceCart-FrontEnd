import { Platform } from "react-native";

// let baseURL = "https://commerce-cart-14.herokuapp.com/api/v1/";
let baseURL;
// exp://192.168.10.8:19000
{
  Platform.OS == "android"
    ? (baseURL = "http://192.168.10.8:3000/api/v1/")
    : (baseURL = "http://localhost:3000/api/v1/");
}

export default baseURL;
