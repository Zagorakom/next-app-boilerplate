'use client';
import styles from './Avatar.module.scss';
import cn from 'classnames';
import { useMemo, useContext } from 'react';
import NiceAvatar, { NiceAvatarConfig } from '@components/NiceAvatar';
// import { UserContext } from '@providers/UserProvider';
import { useAtom } from 'jotai';
import { userAtom } from '@store/jotai';

interface IProps {
    avatarStyle: React.CSSProperties;
    wrapperStyle: React.CSSProperties;
    niceConfig?: NiceAvatarConfig;
    niceIsRandom?: boolean;
    shape?: 'circle' | 'rounded' | 'square';
    withBadge?: boolean;
    byContext?: boolean;
    avatar_url?: string;
    rank?: number;
    hairColor?: string;
    position?: number;
}

const Avatar: React.FC<IProps> = ({
    avatarStyle,
    wrapperStyle,
    niceConfig,
    niceIsRandom,
    shape,
    withBadge,
    byContext,
    avatar_url,
    rank,
    hairColor,
    position,
}) => {
    // const { user } = useContext(UserContext); // my user info
    const [user] = useAtom(userAtom);
    const rankNum = !byContext ? rank : user?.rank;
    const avatarUrl = !byContext ? avatar_url : user?.avatar_url;

    const hairColorByRank = useMemo(() => {
        switch (rankNum) {
            case 0:
                return 'var(--rank-newbie)';
                break;
            case 1:
                return 'var(--rank-bronze)';
                break;
            case 2:
                return 'var(--rank-silver)';
                break;
            case 3:
                return 'var(--rank-gold)';
                break;
            case 4:
                return 'var(--rank-platinum)';
                break;
            case 5:
                return 'var(--rank-diamond)';
                break;
            default:
                return '#586ab2';
                break;
        }
    }, [rankNum]);

    return (
        <div
            className={styles.avatarWrapper}
            style={wrapperStyle}
            data-user-rank={rankNum}
        >
            {!!avatarUrl ?
                <div
                    className={styles.avatar}
                    style={{
                        backgroundImage: `url(${avatarUrl})`,
                        // backgroundImage: `url('/assets/images/avatar-doodles/cartoon-face-doodle_purple.jpg')`,
                    }}
                />
                :
                <NiceAvatar
                    style={avatarStyle}
                    config={niceConfig}
                    isRandom={niceIsRandom}
                    shape={shape}
                    hairColorByRank={hairColorByRank}
                    hairColor={hairColor}
                />
            }
            {!!position &&
                <div
                    className={styles.avatarPositionBadge}
                    data-user-position={position}
                >
                    {position}
                </div>
            }
            {!!withBadge &&
                <div
                    className={styles.avatarRankBadge}
                    data-user-rank={rankNum}
                />
            }
        </div>
    );
};

export default Avatar;
