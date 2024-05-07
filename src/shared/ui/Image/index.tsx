import styles from './Image.module.scss';
import cn from 'classnames';
import NextImage from "next/image";
import { Image as NextUIImage } from '@nextui-org/react';
// import { getRemoteImage } from '@utils/getRemoteImage';
import { rgbDataURL } from '@utils/rgb';

interface IImageProps {
    type?: 'nextui-as-next-image' | 'nextui' | 'next-image-raw';
    /* common */
    src: string;
    width: number;
    height: number;
    alt: string;
    className?: string;
    classNames?: {
        img?: string;
        wrapper?: string;
        zoomedWrapper?: string;
        blurredImg?: string;
    };
    radius?: 'none' | 'small' | 'medium' | 'large'  | 'full' ;
    /* all except next-image-raw */
    isZoomed?: boolean;
    /* all except nextui */
    placeholder?: 'blur' | 'empty' | `data:image/${string}`;
    blurDataURL?: string;
}

export const Image = ({
    type = 'nextui-as-next-image',
    src,
    width,
    height,
    alt,
    className,
    classNames,
    radius = 'medium',
    isZoomed,
    placeholder = 'blur',
    blurDataURL = rgbDataURL(210, 156, 236),
}: IImageProps) => {
    // const lowResImage = await getRemoteImage("https://images.unsplash.com/photo-1714191383728-139b15013690?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
	// console.log(lowResImage);

    switch (type) {
        case 'nextui-as-next-image':
            return (
                <NextUIImage
                    as={NextImage}
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                    className={cn(
                        styles.image,
                        `overflow-hidden object-cover object-center`,
                        `w-[${width}px] h-[${height}px]`,
                        className,
                    )}
                    classNames={{
                        wrapper: `rounded-${radius} ${classNames?.wrapper ?? ''}`,
                        zoomedWrapper: `rounded-${radius} ${classNames?.zoomedWrapper ?? ''}`,
                        img: `rounded-${radius} ${classNames?.img ?? ''}`,
                        blurredImg: `rounded-${radius} ${classNames?.blurredImg ?? ''}`,
                    }}
                    // radius={radius}
                    isZoomed={isZoomed}
                    placeholder={placeholder}
                    blurDataURL={blurDataURL}
                />
            );
        case 'nextui':
            return (
                <NextUIImage
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                    className={cn(
                        styles.image,
                        `overflow-hidden object-cover object-center`,
                        `w-[${width}px] h-[${height}px]`,
                        className,
                    )}
                    classNames={{
                        wrapper: `rounded-${radius} ${classNames?.wrapper ?? ''}`,
                        zoomedWrapper: `rounded-${radius} ${classNames?.zoomedWrapper ?? ''}`,
                        img: `rounded-${radius} ${classNames?.img ?? ''}`,
                        blurredImg: `rounded-${radius} ${classNames?.blurredImg ?? ''}`,
                    }}
                    // radius={radius}
                    isZoomed={isZoomed}
                />
            );
        case 'next-image-raw':
            return (
                <NextImage
                    src={src}
                    width={width}
                    height={height}
                    alt={alt}
                    className={cn(
                        styles.image,
                        `rounded-${radius} overflow-hidden object-cover object-center`,
                        `w-[${width}px] h-[${height}px]`,
                        className,
                    )}
                    placeholder={placeholder} // Optional blur-up while loading
                    blurDataURL={blurDataURL}
                    // blurDataURL={lowResImage?.base64}
                    // priority={true} // preload
                />
            );
    }
};
