'use server';

import 'server-only';
import URLS from '@fetchApi/endpoints';

export async function getUserById(userId: number) {
	const res = await fetch(`${URLS.API.userById}/${userId}`, {
		// body: {}
	});

	if (!res.ok) return undefined;
	return res.json();
}
