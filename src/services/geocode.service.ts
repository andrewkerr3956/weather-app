export interface GeocodeSearchResult {
    country: string;
    country_code: string;
    country_id: number;
    elevation: number;
    feature_code: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    population: number;
    postcodes: number[];
    timezone: string;
}

interface GeocodeSearchResponse {
    generationtime_ms: number;
    results: GeocodeSearchResult[];
}

const geocodeService = {
    search: async (q: string): Promise<GeocodeSearchResponse> => {
        const params = {
            name: q,
            count: '10',
            language: 'en',
            format: 'json'
        };
        const query = new URLSearchParams(params);
        try {
            const resp = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?${query.toString()}`,
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

export default geocodeService;