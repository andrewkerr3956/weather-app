interface WeatherGetForecastResponse {
    latitude: number;
    longitude: number;
}

const weatherService = {
    getForecast: async (q: { latitude: number, longitude: number }): Promise<WeatherGetForecastResponse> => {
        const params = {
            latitude: q.latitude.toString(),
            longitude: q.longitude.toString(),
            daily: ["temperature_2m_max", "temperature_2m_min", "precipitation_probability_max", "precipitation_sum", "weather_code"].toString(),
            hourly: ["temperature_2m", "precipitation_probability", "precipitation", "weather_code"].toString(),
            models: "ncep_gfs_seamless",
            current: ["temperature_2m", "relative_humidity_2m", "apparent_temperature", "is_day", "precipitation", "weather_code", "wind_speed_10m"].toString(),
            timezone: 'auto'
        };
        const query = new URLSearchParams(params);
        try {
            const resp = await fetch(
                `https://api.open-meteo.com/v1/forecast?${query}`,
                {
                    method: 'GET'
                }
            );
            return await resp.json();
        } catch (error) {
            console.error(error);
        }
    }
};

export default weatherService;