'use client';
import { useAtom } from 'jotai';
import { countAtom } from '@store/jotai';

export const Count: React.FC = () => {
    const [count, setCount] = useAtom(countAtom);

    return (
        <span className='mx-4 my-2 text-success-600'>{`Count: ${count}`}</span>
    );
};
