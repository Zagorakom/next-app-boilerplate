import { apiProvider } from '@fetchApi/apiProvider';
import URLS from '@fetchApi/endpoints';

/**************** SIGNATURES -> ****************/
// axios(url[, config])
// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.post(url[, data[, config]])
// axios.patch(url[, data[, config]])
// axios.put(url[, data[, config]])
/**************** SIGNATURES <- ****************/

const currentApiProvider = apiProvider;

export const getUser = () => {
    return currentApiProvider.get(`${URLS.API.user}`);
};

export const logout = () => {
    return currentApiProvider.get(`${URLS.API.logout}`);
};
