export const AUTH_API_LOCAL = "http://localhost:5000/api/v1/auth/";
export const PRODUCT_API_LOCAL = "http://localhost:5000/api/v1/products/";

export const AUTH_API =
  "http://ec2-3-16-36-117.us-east-2.compute.amazonaws.com:5000/api/v1/auth/";
export const PRODUCT_API =
  "http://ec2-3-16-36-117.us-east-2.compute.amazonaws.com:5000/api/v1/products/";

export const GET_PRODUCT_API =
  "http://ec2-3-16-36-117.us-east-2.compute.amazonaws.com:5000/api/v1/products/getProductsDetails/";
export const GET_PRODUCT_API_LOCAL =
  "http://localhost:5000/api/v1/products/getProductsDetails/";

// all test local APIs
export const GET_HAIR_ACESSORIES_LOCAL =
  GET_PRODUCT_API_LOCAL + "Hair Accessories";
export const GET_INDIAN_WEAR_LOCAL = GET_PRODUCT_API_LOCAL + "Indian_Wear";
export const GET_EARRINGS_LOCAL = GET_PRODUCT_API_LOCAL + "Earrings";

// Auth API final
export const LOGIN_API = AUTH_API + "login";
export const SIGNUP_API = AUTH_API + "register";
export const UPDATE_USER_DETAILS_API = AUTH_API + "updateUser";

// Product APIs
export const GET_HAIR_ACESSORIES_API = GET_PRODUCT_API + "Hair Accessories";
export const GET_INDIAN_WEAR = GET_PRODUCT_API + "Indian_Wear";
export const GET_EARRINGS = GET_PRODUCT_API + "Earrings";

// Cart APIs
export const ADD_TO_CART_API = "http://localhost:5000/api/v1/cart/addToCart/";
