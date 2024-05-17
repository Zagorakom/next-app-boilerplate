import { atom } from 'jotai';

export const countAtom = atom(0);
countAtom.debugLabel = 'countAtom';

// export const userAtom = atom({
// 	isLoggedIn: false,
// 	isAdmin: false,
// });

export const userAtom = atom<any>(null);
userAtom.debugLabel = 'userAtom';
