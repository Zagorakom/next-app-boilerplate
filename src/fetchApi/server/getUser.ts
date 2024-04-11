'use server'

import 'server-only';
import URLS from '@fetchApi/endpoints';
import { env_isPROD, env_isDEV } from '@constants/envVars';
import { cookies } from 'next/headers';

export async function getUser() {
    const cookieStore = cookies();
    const sid = cookieStore.get(`${process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME}`);
    console.log('getUser -> sid', sid);

	const res = await fetch(URLS.API.user, {
        ...(env_isPROD && {
            headers: {
                Cookie: `${process.env.NEXT_PUBLIC_SESSION_COOKIE_NAME}=${sid?.value}`
            }
        }),
        ...(env_isDEV && {
            headers: {
                Authorization: `userid ${process.env.NEXT_PUBLIC_LOCAL_DEV_USER_ID}`,
            },
        }),
    });

	if (!res.ok) return undefined;
	return res.json();
}
