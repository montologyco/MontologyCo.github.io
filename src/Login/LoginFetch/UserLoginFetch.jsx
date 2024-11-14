import axios from 'axios';
import baseURL from '../../Global/GlobalFetch/ServerConfig.jsx';

const UserLoginFetch = async (username, password) => {
    try {
        const response = await axios.post(`${baseURL}/users/login`, {
            username,
            password
        });

        return response.data.success;
    } catch (error) {
        console.error('Login error:', error.message);
        throw error;
    }
};

export default UserLoginFetch;