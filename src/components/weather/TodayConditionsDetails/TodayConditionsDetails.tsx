import styles from './TodayConditionsDetails.module.css';

const TodayConditionsDetailItem = () => {
    return (
        <div className={styles.currentDetailsItem}>
            TEST
        </div>
    )
}

const TodayConditionsDetails = () => {
    return (
        <div className={styles.currentDetails}>
            <div className={styles.currentDetailsList}>
                {new Array(4).fill(null).map((i) => (
                    <TodayConditionsDetailItem />
                ))}
            </div>
        </div>
    )
};

export default TodayConditionsDetails;