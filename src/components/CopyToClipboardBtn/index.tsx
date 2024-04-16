'use client';
import styles from './CopyToClipboardBtn.module.scss';
import useTranslation from 'next-translate/useTranslation';
import { useResponsive } from '@hooks/useResponsive';
import Button from '@components/Button';
import toast from 'react-hot-toast';
import copy from 'copy-to-clipboard';

interface IProps {
    text: string;
    children: React.ReactNode;
}

/*
    TODO:
    - CopyToClipboardBtn -> CopyToClipboard
    - Wrap any component
    - Use Sonner instead of react-hot-toast (<Toaster /> in providers)
*/

const CopyToClipboardBtn: React.FC<IProps> = ({
    text,
    children,
}) => {
    const { t, lang } = useTranslation('common');
    const { isDesktop, isTablet, isMobile } = useResponsive();
    // const handleClickCopy = async () => {
    //     try {
    //         await navigator?.clipboard?.writeText(text);
    //         // 👇 Using react-hot-toast to provide feedback
    //         toast.success('Copied!');
    //     } catch (e: any) {
    //         toast.error(`Error: ${e.message}`);
    //         throw e;
    //     }
    // };
    const handleCopy = () => {
        const isCopied = copy(text);
        if (!!isCopied) {
            toast.success('Copied!');
        } else {
            toast.error(`Oops`);
        }
    };

    return (
        <Button
            variant='light'
            disabled={false}
            width='106px'
            height='41px'
            // onClick={handleClickCopy}
            onClick={handleCopy}
            className={styles.btn}
            text={children}
        />
    );
};

export default CopyToClipboardBtn;