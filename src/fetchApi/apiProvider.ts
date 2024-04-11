import axios from 'axios';
import { env_isPROD, env_isDEV } from '@constants/envVars';

const opts = {
    withCredentials: env_isPROD,
    ...(env_isDEV && {
        headers: {
            Authorization: `userid ${process.env.NEXT_PUBLIC_LOCAL_DEV_USER_ID}`, // only for local dev
        },
    }),
};

const apiProvider = axios.create(opts);

export { apiProvider };
