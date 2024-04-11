import Spinner from '@components/Spinner';
import { ESpinnerVariants } from '@typings/Spinner';
import useTranslation from 'next-translate/useTranslation'

export default function Loading() {
  const { t } = useTranslation('common')
  return (
    <div style={{
      minHeight: '100vh',
      // background: 'linear-gradient(30deg, darkslategray, mediumseagreen)', // TEMP
      background: 'linear-gradient(30deg, rgb(121, 74, 152), rgb(140, 63, 173))', // TEMP
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Spinner
        variant={ESpinnerVariants.Warning}
        size='xl'
        // animation='border'
      />
      <p
        style={{
          marginTop: '12px',
          color: 'navajowhite',
          fontSize: '20px',
        }}
      >{t`loading`}</p>
    </div>
  );
}
