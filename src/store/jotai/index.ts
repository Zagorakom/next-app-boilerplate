import { atom } from 'jotai';

export const countAtom = atom(0);

// export const userAtom = atom({
// 	isLoggedIn: false,
// 	isAdmin: false,
// });

export const userAtom = atom<any>(null);
