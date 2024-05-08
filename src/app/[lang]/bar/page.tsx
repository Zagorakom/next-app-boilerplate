'use client';
import styles from './page.module.scss';
import { Button } from '@nextui-org/button';
import { useAtom } from 'jotai';
import { countAtom, userAtom } from '@store/jotai';

const BarPage: React.FC = () => {
    const [count, setCount] = useAtom(countAtom);
    const [user, setUser] = useAtom(userAtom);

    const increaseCount = () => {
        setCount(prev => prev + 1);
    };

    const decreaseCount = () => {
        setCount(prev => prev - 1);
    };
    
    return (
        <div className={styles.bar}>
            <div className={styles.block}>
                <Button variant='flat' color='danger' className='m-2' onPress={decreaseCount}>-</Button>
                <span className='text-large font-code m-4'>{count}</span>
                <Button variant='flat' color='success' className='m-2' onPress={increaseCount}>+</Button>
            </div>
            <div className={styles.block}>
                <pre className='text-small text-warning-700 font-code'>{JSON.stringify(user, null, 2)}</pre>
            </div>
        </div>
    );
};

export default BarPage;
