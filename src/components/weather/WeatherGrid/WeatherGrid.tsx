import todayImgLarge from '../../../assets/images/bg-today-large.svg';
import todayImgSmall from '../../../assets/images/bg-today-small.svg';
import sunnyIconImg from '../../../assets/images/icon-sunny.webp';
import styles from './WeatherGrid.module.css';

export default function WeatherGrid() {
    return (
        <div className={styles.weatherGrid}>
            <div className={styles.currentTemp}>
                <picture className={styles.currentTempBackground}>
                    <source media='(max-width: 728px)' src={todayImgSmall} />
                    <img src={todayImgLarge} alt='Current Conditions Background' className={styles.currentTempBackgroundImg} />
                </picture>
                <div className={styles.currentTempDetails} aria-description='Details about the current temperature and conditions'>
                    <div className={styles.currentTempIdentifier} aria-description='The location name and date, which is used to identify the current temperature and conditions for the '>
                        <h2>New York, NY, USA</h2>
                        <p>January 1, 1970</p>
                    </div>
                    <div className={styles.currentTempConditions}>
                        <picture>
                            <img src={sunnyIconImg} />
                        </picture>
                        <span className={styles.currentTempDegrees}>
                            68° F
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.currentDetails}>

            </div>
            <div className={styles.dailyForecast}>

            </div>
            <div className={styles.hourlyForecast}>

            </div>
        </div>
    )
}