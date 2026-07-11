import type { ReactNode } from 'react';
import styles from './DailyForecast.module.css';
import { getDayOfWeek } from '../../../utils/date';

interface DailyForecastItemProps {
    day: string;
    icon: ReactNode;
    maxTemp: number;
    minTemp: number;
}

const DailyForecastItem = ({ day, icon, maxTemp, minTemp }: DailyForecastItemProps) => {
    return (
        <div className={styles.dailyForecastItem}>
           <p>{day}</p> 
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
                        maxTemp={data?.daily?.temperature_2m_max?.[0]}
                        minTemp={data?.daily?.temperature_2m_min?.[0]}
                    />
                ))}
            </div>
        </div>
    )
};

export default DailyForecast;