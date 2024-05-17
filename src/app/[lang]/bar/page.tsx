'use client';
import styles from './page.module.scss';
import cn from 'classnames';
import { Button } from '@nextui-org/button';
import { getUserById } from '@fetchApi/server/getUserById'; // TEMP
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

    const onFetchUser = async (id: number) => {
		const userData = await getUserById(id);
		console.log({ userData });
        setUser(userData);
	};
    
    return (
        <div className={styles.bar}>
            <div className={styles.block}>
                <Button variant='flat' color='danger' className='m-2' onPress={decreaseCount}>-</Button>
                <span className='text-large font-code m-4'>{count}</span>
                <Button variant='flat' color='success' className='m-2' onPress={increaseCount}>+</Button>
            </div>
            <div className={cn(
                styles.block,
                'flex flex-row !justify-start gap-[40px] min-w-[500px]'
            )}>
                <div className='flex flex-col'>
                    <Button variant='flat' color='warning' className='m-2' onPress={() => onFetchUser(1)}>Fetch User 1</Button>
                    <Button variant='flat' color='warning' className='m-2' onPress={() => onFetchUser(2)}>Fetch User 2</Button>
                    <Button variant='flat' color='warning' className='m-2' onPress={() => onFetchUser(3)}>Fetch User 3</Button>
                </div>
                <pre className='text-small text-warning-700 font-code'>{JSON.stringify(user, null, 2)}</pre>
            </div>
        </div>
    );
};

export default BarPage;
