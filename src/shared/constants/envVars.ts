const env_isPROD: boolean = process.env.NODE_ENV === 'production';
const env_isDEV: boolean = process.env.NODE_ENV === 'development';
const env_MODE: string = process.env.NODE_ENV;
// const env_ALL: any = process.env;
const env_RUNTIME: string | undefined = process.env.NEXT_RUNTIME ? process.env.NEXT_RUNTIME : 'browser';
const env_API_ROUTE: string | undefined = process.env.NEXT_PUBLIC_API_URL;
const env_isBROWSER = () => typeof window !== 'undefined' && typeof document !== 'undefined';

export { env_isPROD, env_isDEV, env_MODE, env_RUNTIME, env_API_ROUTE, env_isBROWSER };
