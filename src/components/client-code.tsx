'use client';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import Button from '@components/Button';

export default function ClientCode() {
	const [count, setCount] = useState(0);
	const { t } = useTranslation('common');

	return (
		<div>
			<div>{t('hello')}</div>
			<div>{t('300')}</div>
			<div>{t('ranks:ranks.platinum')}</div>
			<div>
				{/* <button onClick={() => setCount((v) => v + 1)}>+</button> */}
				<Button
					variant={'warning'}
					text='-'
					onClick={() => setCount(v => v - 1)}
					style={{
						width: '40px',
						margin: '20px',
						marginLeft: '0px',
						marginRight: '20px',
					}}
				/>
				<span style={{
					display: 'inline-flex',
					width: '40px',
					justifyContent: 'center',
				}}>
					{count}
				</span>
				{/* <button onClick={() => setCount((v) => v - 1)}>-</button> */}
				<Button
					variant={'warning'}
					text='+'
					onClick={() => setCount(v => v + 1)}
					// disabled
					style={{
						width: '40px',
						margin: '20px',
						marginLeft: '20px',
						marginRight: '0px',
					}}
				/>
			</div>
		</div>
	);
}
