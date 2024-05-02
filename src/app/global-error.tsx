'use client'; // Error components must be Client Components
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

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const { t, lang } = useTranslation('common');

	return (
		<html>
			<body>
				<div className='min-h-screen flex justify-center items-center'>
					<Card className='w-[400px] max-w-[calc(100vw-32px)]'>
						<CardHeader className='flex gap-3 px-6 py-4'>
							<Image
								alt='nextui logo'
								height={40}
								radius='sm'
								src={`${env_BASEPATH_STRING}/assets/images/error.svg`}
								width={40}
							/>
							<div className='flex flex-col'>
								<p className='text-md'>Oops. Something went wrong!</p>
								<p className='text-small text-default-500'>
									Catched in app/global-error.tsx
								</p>
							</div>
						</CardHeader>
						<Divider />
						<CardBody className='px-6 py-4'>
							<p>The error occured. Stay calm.</p>
						</CardBody>
						<Divider />
						<CardFooter className='px-6 py-4'>
							<Button
								// color='primary'
								color='secondary'
								// variant='faded'
								variant='flat'
								onPress={() => reset()}
							>
								Try again
							</Button>
						</CardFooter>
					</Card>
				</div>
			</body>
		</html>
	);
}
