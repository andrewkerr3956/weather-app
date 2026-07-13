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

interface TodayConditionsDetailsProps {
    data: any;
}

const TodayConditionsDetails = ({ data }: TodayConditionsDetailsProps) => {
    return (
        <div className={styles.currentDetails}>
            <div className={styles.currentDetailsList}>
                <TodayConditionsDetailItem label='Feels Like' value={data?.current?.apparent_temperature} />
                <TodayConditionsDetailItem label='Humidity' value={data?.current?.relative_humidity_2m} />
                <TodayConditionsDetailItem label='Wind' value={data?.current?.wind_speed_2m} />
                <TodayConditionsDetailItem label='Precipitation' value={data?.current?.precipitation} />
            </div>
        </div>
    )
};

export default TodayConditionsDetails;