import styles from './DailyForecast.module.css';

const DailyForecastItem = () => {
    return (
        <div className={styles.dailyForecastItem}>
           <p>Tue</p> 
        </div>
    )
}

const DailyForecast = () => {
    return (
        <div className={styles.dailyForecast}>
            <h3>Daily forecast</h3>
            <div className={styles.dailyForecastList}>
                {new Array(7).fill(null).map((i) => (
                    <DailyForecastItem />
                ))}
            </div>
        </div>
    )
};

export default DailyForecast;