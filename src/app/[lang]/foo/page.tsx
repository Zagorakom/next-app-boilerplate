import styles from './page.module.scss';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import Avatar from '@components/Avatar';

const FooPage: React.FC = () => {
    const { t, lang } = useTranslation('common');
    return (
        <div className={styles.foo}>
            <div className={styles.description}>
				<p>
					FOO page&nbsp;
					<code className={styles.code}>app/foo/page.tsx</code>
				</p>
			</div>

			<div className={styles.grid}>
				<h2>Avatar example: {/* <span>-&gt;</span> */}</h2>
				<h2 className={styles.modeName}>
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
				</h2>
				<h2 className={styles.modeName}>
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
				</h2>
			</div>

			<div className={styles.grid50}>
				<div>{t`title`}</div>
				<div>
					<Link href={`/${lang}`}>Back to Home page ⬅️</Link>
				</div>
			</div>
        </div>
    );
};

export default FooPage;
