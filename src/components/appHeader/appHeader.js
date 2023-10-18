import { Component } from 'react';
import WeatherService from '../services/WeatherService';

import './appHeader.css';

class AppHeader extends Component {
    state = {
        place: null,
        time: null
    }

    weatherService = new WeatherService();

    componentDidMount() {
        this.updateHeader();
    }

    updateHeader = () => {
        const placeName = 'Kyiv';
        
        this.weatherService
            .getWeatherInPlace(placeName)
            .then(res => {
                this.setState({
                    place: res.location.name,
                    time: res.location.localtime.slice(-5)
                })
            })
    }

    render() {
        const { place, time } = this.state;

        return (
            <header>
                <p>{place}</p>
                <time>{time}</time>
            </header>
        )
    }
}

export default AppHeader;