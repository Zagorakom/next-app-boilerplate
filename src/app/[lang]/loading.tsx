import { Spinner } from '@nextui-org/react';

export default function Loading() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className='bg-background'
    >
      <Spinner size='lg' color='primary' />
    </div>
  );
}
