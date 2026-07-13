import type { ReactNode } from 'react';
import styles from './DailyForecast.module.css';
import { getDayOfWeek } from '../../../utils/date';
import { getWeatherIconByCode } from '../../../utils/weather-icon';

interface DailyForecastItemProps {
    day: string;
    weather_code: number;
    maxTemp: number;
    minTemp: number;
}

const DailyForecastItem = ({ day, weather_code, maxTemp, minTemp }: DailyForecastItemProps) => {
    return (
        <div className={styles.dailyForecastItem}>
            <p>{day}</p>
            <picture>
                <img src={getWeatherIconByCode(weather_code)} height={60} width={60} />
            </picture>
            <p>
                {maxTemp}
            </p>
            <p>
                {minTemp}
            </p>
        </div>
    )
}

interface DailyForecastProps {
    data: any;
}

const DailyForecast = ({ data }: DailyForecastProps) => {
    return (
        <div className={styles.dailyForecast}>
            <h3>Daily forecast</h3>
            <div className={styles.dailyForecastList}>
                {data?.daily?.time?.length > 0 && data.daily.time?.map((_, idx) => (
                    <DailyForecastItem
                        day={getDayOfWeek(new Date(data?.daily?.time?.[idx]).getDay())?.slice(0, 3)}
                        weather_code={data?.daily?.weather_code?.[idx]}
                        maxTemp={data?.daily?.temperature_2m_max?.[0]}
                        minTemp={data?.daily?.temperature_2m_min?.[0]}
                    />
                ))}
            </div>
        </div>
    )
};

export default DailyForecast;