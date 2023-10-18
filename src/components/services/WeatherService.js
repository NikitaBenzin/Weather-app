class WeatherService {
    _apiBase = 'http://api.weatherapi.com/v1/';
    _apiKey = 'key=f30c37c7a96a47c08c191131231810';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllWeather = () => {
        return this.getResource(`http://api.weatherapi.com/v1/current.json?key=f30c37c7a96a47c08c191131231810&q=Oswiecim&aqi=no`);
    }

    getWeatherInPlace = (place) => {
        return this.getResource(`${this._apiBase}current.json?${this._apiKey}&q=${place}&aqi=no`);
    }

    getWeatherThrowAllDay = () => {
        return this.getResource('http://api.weatherapi.com/v1/forecast.json?key=f30c37c7a96a47c08c191131231810&q=Oswiecim&days=1&aqi=no&alerts=no');
    }
}

export default WeatherService;