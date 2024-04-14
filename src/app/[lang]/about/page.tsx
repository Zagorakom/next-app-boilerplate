'use client';
import styles from './page.module.scss';
import { useState, useCallback } from 'react';
import { Spinner, Button } from '@nextui-org/react';
import ModalBase from '@components/Modals/ModalBase';
import ModalConfirmation from '@components/Modals/ModalConfirmation';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import cn from 'classnames';

export default function AboutPage() {
    const { t, lang } = useTranslation('about');
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [isModalActionInProgress, setIsModalActionInProgress] = useState(false);

	const closeModal = useCallback(() => {
		console.log('onConfirm');
		setIsModalActionInProgress(true);
		setTimeout(() => {
			setIsModalActionInProgress(false);
			setIsModalVisible(false);
		}, 1000)
    }, []);

    return (
		<div className={cn(styles.about)}>
			<div className='w-full flex'>
				<p className='text-default-100 bg-default-700 text-sm px-6 py-3 rounded-xl'>
					<code>About page&nbsp; <b className='text-danger-400'>app/about/page.tsx</b></code>
				</p>
			</div>

			<div className={styles.grid}>
				<h2>Loader example: {/* <span>-&gt;</span> */}</h2>
				<h2 className={styles.modeName}>
					<div className={styles.spinnerWrapper}>
						<Spinner color='secondary' className='mx-4 my-1' />
						<Spinner color='primary' className='mx-4 my-1' />
						<Spinner color='current' className='mx-4 my-1' />
					</div>
				</h2>
				<h2 className={styles.modeName}>
					<div className={styles.spinnerWrapper}>
						<Spinner size='lg' color='success' className='mx-4 my-1' />
						<Spinner size='md' color='warning' className='mx-4 my-1' />
						<Spinner size='sm' color='danger' className='mx-4 my-1' />
					</div>
				</h2>
			</div>

			<div className={styles.grid}>
				<h2>Modal example: {/* <span>-&gt;</span> */}</h2>
				<h2 className={styles.modeName}>
					<div className={styles.spinnerWrapper}>
						<Button
							color='primary'
							className='m-1'
							onPress={() => setIsModalVisible(true)}
						>
							Show Modal
						</Button>
					</div>
				</h2>
			</div>

			<div className={styles.grid50}>
				<div>{t`title`}</div>
				<div>
					<Link href={`/${lang}`}>Back to Home page ⬅️</Link>
				</div>
			</div>

			<ModalBase
                isVisible={isModalVisible}
                onClose={() => {setIsModalVisible(false)}}
                appearance={'default'}
            >
                <ModalConfirmation
                    text={`Are you sure? isModalVisible: ${isModalVisible}`}
                    onConfirm={closeModal}
                    onCancel={() => {
						setIsModalVisible(false);
						console.log('onCancel');
					}}
                    actionInProgress={isModalActionInProgress}
                />
            </ModalBase>
		</div>
	);
};
