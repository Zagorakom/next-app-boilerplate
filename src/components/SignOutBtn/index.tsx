'use client';
import styles from './SignOutBtn.module.scss';
import cn from 'classnames';
import { useState, useEffect, useContext } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { logout } from '@fetchApi/methods';
import { redirect } from 'next/navigation';
// import { UserContext } from '@providers/UserProvider';
import { useAtom } from 'jotai';
import { userAtom } from '@store/jotai';

interface IProps {
    type?:
        'default' |
        'alt' | // Sidebar, HeaderUser (only desktop)
        'burger-menu';
    customStyle?: any;
}

const SignOutBtn: React.FC<IProps> = ({type = 'default', customStyle}) => {
    // const { user, setUser } = useContext(UserContext);
    const [user, setUser] = useAtom(userAtom);
    const { t, lang } = useTranslation('common');
    const [needToRedirect, setNeedToRedirect] = useState(false);

    const signOut = () => {
        logout()
            .then((response: any) => {
                if (response?.data?.status === 'ok') {
                    setNeedToRedirect(true);
                } else {
                    console.log('LogOut FAILED');
                }
            })
    };

    useEffect(() => {
        if (!!needToRedirect) {
            redirect('/');
        }
    }, [needToRedirect]);

    return (
        <div className={cn(
            styles.signOutBtnWrapper,
            (type === 'alt') && styles.signOutBtnTypeAlt,
            (type === 'burger-menu') && styles.signOutBtnTypeBurger,
        )}>
            <div
                className={styles.signOutBtn}
                onClick={signOut}
                style={customStyle}
            >
                <span className={styles.signOutBtnText}>
                    Sign Out
                </span>
            </div>
        </div>
    );
};

export default SignOutBtn;
