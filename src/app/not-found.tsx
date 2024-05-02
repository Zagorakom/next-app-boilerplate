import {
	Link,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Divider,
	Image,
} from '@nextui-org/react';
import useTranslation from 'next-translate/useTranslation';
import { env_BASEPATH_STRING } from '@constants/envVars';

export default function NotFound() {
	const { t, lang } = useTranslation('common');

	return (
		<div className='min-h-screen flex justify-center items-center'>
			<Card className='w-[400px] max-w-[calc(100vw-32px)]'>
				<CardHeader className='flex gap-3 px-6 py-4'>
					<Image
						alt='nextui logo'
						height={40}
						radius='sm'
						src={`${env_BASEPATH_STRING}/assets/images/404.svg`}
						width={40}
					/>
					<div className='flex flex-col'>
						<p className='text-md'>404</p>
						<p className='text-small text-default-500'>
							Page was not found
						</p>
					</div>
				</CardHeader>
				<Divider />
				<CardBody className='px-6 py-4'>
					<p>
						The page is outdated, has been deleted or does not exist at all
					</p>
				</CardBody>
				<Divider />
				<CardFooter className='px-6 py-4'>
					{/* <Link
						href={`${env_BASEPATH_STRING}/${lang}`}
						showAnchorIcon
						underline='hover'
						color='primary'
					>
						Back to Home page
					</Link> */}
					<Button
						as={Link}
						href={`${env_BASEPATH_STRING}/${lang}`}
						showAnchorIcon
						underline='hover'
						// color='primary'
						color='secondary'
						// variant='faded'
						variant='flat'
					>
						Back to Home page
					</Button>
				</CardFooter>
			</Card>
		</div>
	);

	// return (
	// 	<div className='min-h-screen flex justify-center items-center'>
	// 		<Card
	// 			isFooterBlurred
	// 			radius='lg'
	// 			className='border-none max-w-[400px]'
	// 		>
	// 			<Image
	// 				alt='Woman listing to music'
	// 				className='object-cover w-full h-full bg-cover'
	// 				height={300}
	// 				src={`${env_BASEPATH_STRING}/assets/images/404.svg`}
	// 				width={300}
	// 			/>
	// 			<CardFooter className='justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 min-h-16'>
	// 				<Link
	// 					href={`${env_BASEPATH_STRING}/${lang}`}
	// 					showAnchorIcon
	// 					underline='hover'
	// 					color='foreground'
	// 				>
	// 					Back to Home page
	// 				</Link>
	// 			</CardFooter>
	// 		</Card>
	// 	</div>
	// );
}
