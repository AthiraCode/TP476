// api.js
import axios from 'axios';
//import { generatePassword as generatePasswordFromController } from './CentralController';

const API_BASE_URL = 'http://localhost/projects/termproject/backend/api';

// Login function
export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login.php`, credentials);
        return response.data;
    } catch (error) {
        return { success: false, message: error.message };
    }
};

// Register function
export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register.php`, userData);
        return response.data;
    } catch (error) {
        return { success: false, message: error.message };
    }
};

// Now you use the imported function from CentralController
// export const generatePassword = (passwordType) => {
//     return new Promise((resolve) => {
//         const generatedPassword = generatePasswordFromController(passwordType);
//         resolve(generatedPassword);
//     });
// };
