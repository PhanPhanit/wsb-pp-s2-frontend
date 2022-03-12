const BASE_URL = "/api/v1";
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