class WeatherService {
    _apiBase = 'https://api.weatherapi.com/v1/';
    _apiKey = 'key=f30c37c7a96a47c08c191131231810';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllWeather = () => {
        return this.getResource(`${this._apiBase}future.json?${this._apiKey}&q=Kyiv&dt=2023-11-17`);
    }

    getWeatherInPlace = (place) => {
        return this.getResource(`${this._apiBase}future.json?${this._apiKey}&q=${place}&dt=2023-11-17`);
    }
}

export default WeatherService;