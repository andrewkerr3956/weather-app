import sunnyIconImg from '../assets/images/icon-sunny.webp';
import cloudyIconImg from '../assets/images/icon-partly-cloudy.webp';
import rainIconImg from '../assets/images/icon-rain.webp';

export const getWeatherIconByCode = (code: number) => {
    if(code >= 0 && code <= 2) {
        return sunnyIconImg;
    }
    if (code === 3) {
        return cloudyIconImg;
    }
}