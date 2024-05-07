import styles from './page.module.scss';
import cn from 'classnames';
import NextImage from "next/image";
import { Image as NextUIImage } from '@nextui-org/react';
import { Image as MyImage } from '@ui/Image';
// import { getRemoteImage } from '@utils/getRemoteImage';
import { rgbDataURL } from '@utils/rgb';

export default async function ImagesPage() {
	// const lowResImage = await getRemoteImage("https://images.unsplash.com/photo-1714191383728-139b15013690?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
	// console.log(lowResImage);
    return (
		<div className={cn(styles.images)}>
			<div className='w-full flex'>
				<p className='text-default-100 bg-default-700 text-sm px-6 py-3 rounded-xl'>
					<code>Images page&nbsp; <b className='text-danger-400'>app/images/page.tsx</b></code>
				</p>
			</div>

			<div className={styles.grid}>
				<div className={styles.sample}>
					<NextImage
						src="https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1714191383728-139b15013690?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						width={200} // automatically provided for static imports
						height={200} // automatically provided for static imports
						alt="unsplash image"
						className={cn(
							styles.image,
							"rounded-xl overflow-hidden object-cover object-center",
							"w-[200px] h-[200px]",
						)}
						// priority={true} // preload
						placeholder = 'blur' // Optional blur-up while loading
						// blurDataURL={lowResImage?.base64}  // automatically provided for static imports
						blurDataURL={rgbDataURL(210, 156, 236)}
					/>
				</div>
				<div className={styles.sample}>
					<NextUIImage
						src="https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1712331642888-3bc4191f41a3?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						width={200}
						height={200}
						alt="unsplash image"
						// radius='lg' // default = 'xl'
						isZoomed
						className={cn(
							styles.image,
							"rounded-xl overflow-hidden object-cover object-center",
							"w-[200px] h-[200px]",
						)}
					/>
				</div>
				<div className={styles.sample}>
					<NextUIImage
						as={NextImage}
						src="https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1523386571890-790e639b10a4?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						width={200}
						height={200}
						alt="unsplash image"
						// radius='lg' // default = 'xl'
						isZoomed
						placeholder = 'blur'
						blurDataURL={rgbDataURL(210, 156, 236)}
						className={cn(
							styles.image,
							"rounded-xl overflow-hidden object-cover object-center",
							"w-[200px] h-[200px]",
						)}
					/>
				</div>
			</div>
			<div className={styles.grid50}>
				<div className={styles.sample}>
					<NextUIImage
						src="https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1555448248-2571daf6344b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						width={350}
						height={200}
						alt="unsplash image"
						radius='full' // default = 'xl'
						isZoomed
						className={cn(
							styles.image,
							"rounded-full overflow-hidden object-cover object-center",
							"w-[350px] h-[200px]",
						)}
					/>
				</div>
				<div className={styles.sample}>
					<NextUIImage
						as={NextImage}
						src="https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1556139954-ec19cce61d61?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						width={450}
						height={200}
						alt="unsplash image"
						radius='full' // default = 'xl'
						isZoomed
						placeholder = 'blur'
						blurDataURL={rgbDataURL(210, 156, 236)}
						className={cn(
							styles.image,
							"rounded-full overflow-hidden object-cover object-center",
							"w-[450px] h-[200px]",
						)}
					/>
				</div>
			</div>
			<div className={styles.grid}>
				<div className={styles.sample}>
					<MyImage
						type='next-image-raw'
						src='https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1714191383728-139b15013690?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						width={200}
						height={200}
						alt='unsplash image'
						className='border-4 border-primary'
						radius='full'
					/>
				</div>
				<div className={styles.sample}>
					<MyImage
						type='nextui'
						src='https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1712331642888-3bc4191f41a3?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						width={200}
						height={200}
						alt='unsplash image'
						className='border-4 border-primary'
						radius='large'
						isZoomed={true}
					/>
				</div>
				<div className={styles.sample}>
					<MyImage
						type='nextui-as-next-image'
						src='https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1523386571890-790e639b10a4?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						width={200}
						height={200}
						alt='unsplash image'
						className='border-4 border-primary'
						radius='medium'
						isZoomed={true}
					/>
				</div>
			</div>
			<div className={styles.grid}>
				<div className={styles.sample}>
					<MyImage
						type='nextui'
						src='https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1714191383728-139b15013690?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						width={200}
						height={200}
						alt='unsplash image'
						className='border-4 border-primary'
						radius='small'
						isZoomed={true}
					/>
				</div>
				<div className={styles.sample}>
					<MyImage
						type='nextui'
						src='https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1712331642888-3bc4191f41a3?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						width={200}
						height={200}
						alt='unsplash image'
						className='border-4 border-primary'
						radius='none'
						isZoomed={true}
					/>
				</div>
				<div className={styles.sample}>
					<MyImage
						type='nextui-as-next-image'
						src='https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1523386571890-790e639b10a4?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						width={200}
						height={200}
						alt='unsplash image'
						className='border-4 border-primary'
						radius='full'
						isZoomed={true}
					/>
				</div>
			</div>
			<div className={styles.grid50}>
				<div className={styles.sample}>
					<MyImage
						type='nextui'
						src='https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1555448248-2571daf6344b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						width={350}
						height={200}
						alt='unsplash image'
						isZoomed={true}
						radius='small'
						className='border-4 border-primary'
						classNames={{
							wrapper: `rounded-tl-[60px] rounded-bl-[60px]`,
							zoomedWrapper: `rounded-tl-[60px] rounded-bl-[60px]`,
							img: `rounded-tl-[60px] rounded-bl-[60px]`,
							blurredImg: `rounded-tl-[60px] rounded-bl-[60px]`,
						}}
					/>
				</div>
				<div className={styles.sample}>
					<MyImage
						// type='nextui-as-next-image' // default
						src='https://app.requestly.io/delay/3000/https://images.unsplash.com/photo-1556139954-ec19cce61d61?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						width={450}
						height={200}
						alt='unsplash image'
						isZoomed={true}
						radius='large'
						className='border-4 border-primary'
						classNames={{
							wrapper: `rounded-tr-[80px] rounded-br-[80px]`,
							zoomedWrapper: `rounded-tr-[80px] rounded-br-[80px]`,
							img: `rounded-tr-[80px] rounded-br-[80px]`,
							blurredImg: `rounded-tr-[80px] rounded-br-[80px]`,
						}}
					/>
				</div>
			</div>
		</div>
	);
};
