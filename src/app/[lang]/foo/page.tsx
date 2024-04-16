import styles from './page.module.scss';
// import Link from 'next/link';
import { Link } from '@nextui-org/react';
import useTranslation from 'next-translate/useTranslation';
import Avatar from '@components/Avatar';
import { Button } from '@nextui-org/button';

const FooPage: React.FC = () => {
    const { t, lang } = useTranslation('common');
    return (
        <div className={styles.foo}>
            <div className='w-full flex'>
				<p className='text-default-100 bg-default-700 text-sm px-6 py-3 rounded-xl'>
					<code>FOO page&nbsp; <b className='text-danger-400'>app/foo/page.tsx</b></code>
				</p>
			</div>

			<div className={styles.grid}>
				<h2 className='text-foreground-800'>Avatar example: {/* <span>-&gt;</span> */}</h2>
                <div className={styles.avatarsWrapper}>
                    <Avatar
                        avatarStyle={{
                            width: '46px',
                            height: '46px'
                        }}
                        wrapperStyle={{
                            width: '50px',
                            height: '50px',
                            margin: '0px 10px'
                        }}
                        withBadge={false}
                        // niceConfig
                        // niceIsRandom={true}
                        shape='circle'
                    />
                    <Avatar
                        avatarStyle={{
                            width: '46px',
                            height: '46px'
                        }}
                        wrapperStyle={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '8px',
                            margin: '0px 10px'
                        }}
                        withBadge={false}
                        // niceConfig
                        // niceIsRandom={true}
                        shape='rounded'
                    />
                    <Avatar
                        avatarStyle={{
                            width: '46px',
                            height: '46px'
                        }}
                        wrapperStyle={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '0px',
                            margin: '0px 10px'
                        }}
                        withBadge={false}
                        // niceConfig
                        // niceIsRandom={true}
                        shape='square'
                    />
                </div>
                <div className={styles.avatarsWrapper}>
                    <Avatar
                        avatarStyle={{
                            width: '46px',
                            height: '46px'
                        }}
                        wrapperStyle={{
                            width: '50px',
                            height: '50px',
                            margin: '0px 10px'
                        }}
                        withBadge={false}
                        // niceConfig
                        // niceIsRandom={true}
                        shape='circle'
                        rank={1}
                        byContext={false}
                    />
                    <Avatar
                        avatarStyle={{
                            width: '46px',
                            height: '46px'
                        }}
                        wrapperStyle={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '8px',
                            margin: '0px 10px'
                        }}
                        withBadge={false}
                        // niceConfig
                        // niceIsRandom={true}
                        shape='rounded'
                        rank={2}
                        byContext={false}
                    />
                    <Avatar
                        avatarStyle={{
                            width: '46px',
                            height: '46px'
                        }}
                        wrapperStyle={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '0px',
                            margin: '0px 10px'
                        }}
                        withBadge={false}
                        // niceConfig
                        // niceIsRandom={true}
                        shape='square'
                        rank={3}
                        byContext={false}
                    />
                </div>
			</div>

            <div className={styles.grid}>
				<h2 className='text-danger-800'>Button example: {/* <span>-&gt;</span> */}</h2>
                <div className={styles.avatarsWrapper}>
                    <Button radius='full' color='secondary' className='m-1'>Click me</Button>
                    <Button radius='lg' color='primary' className='m-1'>Click me</Button>
                    <Button radius='md' color='success' className='m-1'>Click me</Button>
                </div>
                <div className={styles.avatarsWrapper}>
                    <Button variant='faded' color='secondary' className='m-1'>Click me</Button>
                    <Button variant='flat' color='danger' className='m-1'>Click me</Button>
                    <Button variant='ghost' color='warning' className='m-1'>Click me</Button>
                </div>
			</div>

			<div className={styles.grid50}>
				<div>{t`title`}</div>
				<div>
                    <Link
						href={`/${lang}`}
						showAnchorIcon
						underline='always'
					>
						Back to Home page
					</Link>
				</div>
			</div>
        </div>
    );
};

export default FooPage;
