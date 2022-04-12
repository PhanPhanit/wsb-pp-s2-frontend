const BASE_URL = "/api/v1";
// Respone cookie
export const responseCookie = `${BASE_URL}/wsb-res-cookie`;
// Login with social media
export const facebookLogin = `http://localhost:5000${BASE_URL}/auth/facebook`;
export const googleLogin = `http://localhost:5000${BASE_URL}/auth/google`;
// Auth
export const register = `${BASE_URL}/auth/register`;
export const login = `${BASE_URL}/auth/login`;
export const logout = `${BASE_URL}/auth/logout`;
// User
export const getAllUser = `${BASE_URL}/users`;
export const showCurrentUser = `${BASE_URL}/users/showMe`;
// Slide
export const getAllSlide = `${BASE_URL}/wsb-slide`;
// Category
export const getAllCategory = `${BASE_URL}/wsb-cate`;
// Product
export const getAllProduct = `${BASE_URL}/wsb-pro`;
// Order Item
export const getAllOrderItem = `${BASE_URL}/wsb-od-item`;
// Create Payment Intent
export const createPaymentIntent = `${BASE_URL}/wsb-ch-out/create-payment-intent`;
// Order
export const createOrder = `${BASE_URL}/wsb-od`;
export const getAllMyOrder = `${BASE_URL}/wsb-od/show-all-my-order`;
// Reivew
export const review = `${BASE_URL}/wsb-rev`;
export const starPercent = `${BASE_URL}/wsb-rev/star-percent`;