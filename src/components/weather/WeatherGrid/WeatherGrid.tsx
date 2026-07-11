import DailyForecast from '../DailyForecast/DailyForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import TodayConditions from '../TodayConditions/TodayConditions';
import TodayConditionsDetails from '../TodayConditionsDetails/TodayConditionsDetails';
import styles from './WeatherGrid.module.css';

export default function WeatherGrid() {
    return (
        <div className={styles.weatherGrid}>
            <TodayConditions />
            <TodayConditionsDetails />
            <DailyForecast />
            <HourlyForecast />
        </div>
    )
}