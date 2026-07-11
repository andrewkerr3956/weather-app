import DailyForecast from '../DailyForecast/DailyForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import TodayConditions from '../TodayConditions/TodayConditions';
import TodayConditionsDetails from '../TodayConditionsDetails/TodayConditionsDetails';
import styles from './WeatherGrid.module.css';

interface WeatherGridProps {
    data: any;
    loading: boolean;
}

const WeatherGrid = ({ data, loading }: WeatherGridProps) => {
    return (
        <div className={styles.weatherGrid}>
            <TodayConditions 
                location={data?.name || 'N/A'}
                temperature={Math.round(data?.current?.temperature_2m)}
                unit={data?.current_units?.temperature_2m}
                date={new Date(data?.current?.time)}
                weather_code={data?.current?.weather_code}
            />
            <TodayConditionsDetails />
            <DailyForecast 
                data={{
                    daily: data?.daily,
                    daily_units: data?.daily_units
                }}
            />
            <HourlyForecast />
        </div>
    )
};

export default WeatherGrid;