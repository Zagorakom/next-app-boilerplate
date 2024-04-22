import styles from './page.module.scss';

// const BarPage: React.FC = () => (
// 	<div className={styles.bar}>
//         <h2>Bar</h2>
//     </div>
// );

const BarPage: React.FC = () => {
    throw new Error('Test Error');
    
    return (
        <div className={styles.bar}>
            <h2>Bar</h2>
        </div>
    );
};

export default BarPage;
