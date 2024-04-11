'use client';

import { useMemo, useEffect, useState } from 'react';
import Avatar, { genConfig, AvatarFullConfig, Style } from 'react-nice-avatar';
import { env_isBROWSER } from '@constants/envVars';

const avatarConfigPreset = genConfig({ // partially predefined avatar
    sex: 'man', // man, woman
    hairStyle: 'normal', // normal, thick, mohawk, womanLong, womanShort
    hairColor: '#00DE69',
    faceColor: '#F9C9B6',
    earSize: 'small', // small, big
    eyeStyle: 'circle', // circle, oval, smile
    glassesStyle: 'none', // none, round, square
    noseStyle: 'round', // short, long, round
    mouthStyle: 'peace', // laugh, smile, peace
    hatStyle: 'none', // none, beanie, turban
    shirtColor: '#9287ff',
    shirtStyle: 'polo', // hoody, short, polo
    bgColor: '#E7FCF1',
});
const avatarConfigRandom = genConfig(); // random avatar

interface IProps {
    config?: AvatarFullConfig; // must be generated by genConfig()
    isRandom?: boolean;
    className?: string;
    style?: React.CSSProperties;
    shape?: 'circle' | 'rounded' | 'square';
    hairColorByRank?: string;
}

export type NiceAvatarConfig = AvatarFullConfig;

const NiceAvatar: React.FC<IProps> = ({
    config,
    isRandom,
    className,
    style,
    shape,
    hairColorByRank,
}) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (env_isBROWSER()) {
            setIsVisible(true);
        }
    }, []);

    const avatarConfig = useMemo(
        () => {
            if (isRandom) {
                return avatarConfigRandom;
            } else if (!!config) {
                return config;
            } else {
                return avatarConfigPreset;
            }
        },
        [config, isRandom]
    );

    return (
        isVisible ?
        <Avatar
            style={{...style}}
            {...avatarConfig}
            hairColor={hairColorByRank}
            shape={shape ? shape : 'circle'}
        />
        :
        <div
            style={{
                ...style,
                borderRadius: '50%',
                backgroundColor: avatarConfig.bgColor || '#D0F9E3',
            }}
        />
    );
}

export default NiceAvatar;