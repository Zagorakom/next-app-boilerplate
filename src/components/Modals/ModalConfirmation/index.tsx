'use client';
import styles from './ModalConfirmation.module.scss';
import { Button } from '@nextui-org/react';

interface IProps {
    text: string | React.ReactNode;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
    actionInProgress?: boolean;
}

const ModalConfirmation: React.FC<IProps> = ({
    text,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm,
    onCancel,
    actionInProgress,
}) => {
    
    return (
        <div className={styles.modalConfirmation}>
            <div className={styles.text}>
                {text}
            </div>
            <div className={styles.btnGroup}>
                <Button
                    color="success"
                    variant="solid"
                    radius="lg"
                    isDisabled={actionInProgress}
                    isLoading={actionInProgress}
                    onPress={onConfirm}
                    className='w-1/2 mx-2'
                >
                    {actionInProgress ? '' : confirmText}
                </Button>
                <Button
                    color="danger"
                    variant="ghost"
                    radius="lg"
                    isDisabled={actionInProgress}
                    onPress={onCancel}
                    className='w-1/2 mx-2'
                >
                    {cancelText}
                </Button>
            </div>
        </div>
    );
};

export default ModalConfirmation;
