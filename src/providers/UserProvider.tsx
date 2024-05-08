'use client';
import { createContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserToStore, setLoggedOut } from '@store/authSlice';
// import { deepEqual } from '@utils/objects/deepEqual';
import { useHydrateAtoms } from 'jotai/utils';
import { userAtom } from '@store/jotai';

export const UserContext = createContext<{user?: any, setUser?: any}>({});
 
export default function UserProvider({
	children,
    userData,
}: {
	children: React.ReactNode;
    userData: any;
}) {
    useHydrateAtoms([[userAtom, userData]]);
    const [user, setUser] = useState<any>(userData);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!!user) {
            dispatch(setUserToStore({user: user}));
        } else {
            dispatch(setLoggedOut());
        }
    }, [user, dispatch]);

    return (
        <UserContext.Provider value={{
            user,
            setUser,
        }}>
            {children}
        </UserContext.Provider>
    );
};
