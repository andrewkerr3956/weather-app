import { useEffect, type ReactNode } from 'react';
import styles from './HourlyForecast.module.css';
import { getFormattedHour } from '../../../utils/date';

interface HourlyForecastItemProps {
    icon: ReactNode;
    time: string;
    temperature: number;
    unit: string;
}

const HourlyForecastItem = ({ icon, time, temperature, unit }: HourlyForecastItemProps) => {
    return (
        <div className={styles.hourlyForecastItem}>
            <span>{time}</span> &nbsp;
            <span>{temperature}° {unit}</span>
        </div>
    )
}

interface HourlyForecastProps {
    data: any;
}

const HourlyForecast = ({ data }: HourlyForecastProps) => {
    return (
        <aside className={styles.hourlyForecast}>
            <h4 className={styles.hourlyForecastTitle}>Hourly Forecast</h4>
            <ul className={styles.hourlyForecastList}>
                {data?.hourly?.time?.length > 0 ? data.hourly.time.map((h: string, idx: number) => {
                    console.log(data?.hourly?.temperature_2m?.[idx]);
                    return (
                        <HourlyForecastItem icon={null} time={getFormattedHour(new Date(h)?.getHours())} temperature={data?.hourly?.temperature_2m?.[idx]} unit='F' />
                    )
                }) : null}
            </ul>
        </aside>
    )
};

export default HourlyForecast;