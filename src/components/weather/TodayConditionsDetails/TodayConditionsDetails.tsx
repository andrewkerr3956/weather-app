import styles from './TodayConditionsDetails.module.css';

interface TodayConditionsDetailItemProps {
    label: string;
    value: string;
}

const TodayConditionsDetailItem = (props: TodayConditionsDetailItemProps) => {
    const { label, value } = props;

    return (
        <div className={styles.currentDetailsItem}>
            <p>{label}</p>
            <p>{value}</p>
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