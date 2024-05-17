import styles from './page.module.scss';

const OopsPage: React.FC = () => {
    throw new Error('Test Error');
    
    return (
        <div className={styles.oops}>
            Oops
        </div>
    );
};

export default OopsPage;
