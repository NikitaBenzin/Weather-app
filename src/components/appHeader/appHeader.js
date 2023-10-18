import { Component } from 'react';
import WeatherService from '../services/WeatherService';

import './appHeader.css';

class AppHeader extends Component {
    state = {
        place: null,
        time: new Date().toLocaleTimeString()
    }

    weatherService = new WeatherService();

    componentDidMount() {
        this.updateHeader();
    }

    componentDidUpdate(prevProps, prevState) {
        setTimeout(() => this.updateTime(), 1000);
    }

    componentWillUnmount(){
        clearInterval();
    }

    updateHeader = () => {
        this.weatherService
            .getWeatherThrowAllDay()
            .then(res => {
                this.setState({
                    place: res.location.name
                })
            })
    }

    updateTime = () => {
        this.setState({
            time: new Date().getHours() + ':' + new Date().getMinutes()
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