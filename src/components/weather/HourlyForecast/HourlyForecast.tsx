import type { ReactNode } from 'react';
import styles from './HourlyForecast.module.css';

interface HourlyForecastItemProps {
    icon: ReactNode;
    time: string;
    temperature: number;
    unit: string;
}

const HourlyForecastItem = ({ icon, time, temperature, unit }: HourlyForecastItemProps) => {
    return (
        <div className={styles.hourlyForecastItem}>
            <span>{time}</span>
            <span>{temperature}° {unit}</span>
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