import type { ReactNode } from 'react';
import todayImgLarge from '../../../assets/images/bg-today-large.svg';
import todayImgSmall from '../../../assets/images/bg-today-small.svg';
import sunnyIconImg from '../../../assets/images/icon-sunny.webp';
import styles from './TodayConditions.module.css';
import { getWeatherIconByCode } from '../../../utils/weather-icon';

interface TodayConditionsProps {
    location: string;
    date: Date;
    temperature: number;
    unit: string;
    weather_code: number;
}

const TodayConditions = ({ location, date, temperature, unit, weather_code }: TodayConditionsProps) => {
    return (
        <div className={styles.currentTemp}>
            <picture className={styles.currentTempBackground}>
                <source media='(max-width: 728px)' src={todayImgSmall} />
                <img src={todayImgLarge} alt='Current Conditions Background' className={styles.currentTempBackgroundImg} />
            </picture>
            <div className={styles.currentTempDetails} aria-description='Details about the current temperature and conditions'>
                <div className={styles.currentTempIdentifier} aria-description='The location name and date, which is used to identify the current temperature and conditions for the '>
                    <h2>{location}</h2>
                    <p>{new Date(date).toDateString()}</p>
                </div>
                <div className={styles.currentTempConditions}>
                    <picture>
                        <img src={getWeatherIconByCode(weather_code)} height={120} width={120} />
                    </picture>
                    <span className={styles.currentTempDegrees}>
                        {temperature}°
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TodayConditions;