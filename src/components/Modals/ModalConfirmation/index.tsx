'use client';
import styles from './ModalConfirmation.module.scss';
import { useEffect, memo } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Button from '@components/Button';
import Spinner from '@components/Spinner';
import { ESpinnerVariants } from '@typings/Spinner';

interface IProps {
    text: string | React.ReactNode;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
    actionInProgress?: boolean;
}

const ModalConfirmation: React.FC<IProps> = memo(function ModalConfirmation({
    text,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm,
    onCancel,
    actionInProgress,
}) {
    const { t, lang } = useTranslation('common');
    
    return (
        <div className={styles.modalConfirmation}>
            <div className={styles.text}>
                {text}
            </div>
            <div className={styles.btnGroup}>
                <Button
                    isRounded={true}
                    inModal='confirm'
                    disabled={actionInProgress}
                    width='114px'
                    height='41px'
                    onClick={onConfirm}
                    text={
                        actionInProgress ?
                        <Spinner
                            variant={ESpinnerVariants.Success}
                            size='sm'
                            animation='border'
                        />
                        :
                        <span>{confirmText}</span>
                    }
                />
                <Button
                    isRounded={true}
                    inModal='cancel'
                    disabled={actionInProgress}
                    width='114px'
                    height='41px'
                    onClick={onCancel}
                    text={cancelText}
                />
            </div>
        </div>
    );
});

export default ModalConfirmation;
