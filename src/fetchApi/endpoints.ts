const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_PREFIX = `${API_URL}/api`;
const API_NEXT_PREFIX = `${process.env.NEXT_PUBLIC_HOSTNAME}/api`;

const URLS = {
    API: {
        user: `${API_PREFIX}/user/1`, // TEMP
        userById: `${API_PREFIX}/user`, // TEMP
        // logout: `${API_PREFIX}/auth/logout`,
        logout: `${API_NEXT_PREFIX}/logout`,
    }
};

export default URLS;
