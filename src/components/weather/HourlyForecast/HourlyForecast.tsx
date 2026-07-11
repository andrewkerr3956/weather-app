import styles from './HourlyForecast.module.css';

const HourlyForecastItem = () => {
    return (
        <div className={styles.hourlyForecastItem}>
            Test info
        </div>
    )
}

export default function HourlyForecast() {
    return (
        <aside className={styles.hourlyForecast}>
            <h4 className={styles.hourlyForecastTitle}>Hourly Forecast</h4>
            <ul className={styles.hourlyForecastList}>
                {new Array(23).fill(null).map((i) => (
                    <li><HourlyForecastItem /></li>
                ))}
            </ul>
        </aside>
    )
}