import { Component } from'react';
import WeatherService from '../services/WeatherService';

import './appMain.css';

class AppMain extends Component {
    state = {
        condition: null,
        temp: null,
        img: null,
        hours: [],
        currentHour: null
    }

    weatherService = new WeatherService();

    componentDidMount() {
        this.updateMain();
    }

    updateMain = () => {
        this.weatherService
            .getWeatherThrowAllDay()
            .then(res => {
                this.setState({
                    condition: res.current.condition.text,
                    temp: res.current.temp_c,
                    img: res.current.condition.icon,
                    hours: res.forecast.forecastday[0].hour,
                    currentHour: res.location.localtime
                })
            })
    }



    renderItems(arr) {
        // создыть переменную и масив parseInt(item.time.slice(-6, -3)) - 2)

        arr.forEach((item) => {
            if (item.time.slice(-6, -3) === this.state.currentHour.slice(-6, -3)){
                console.log(parseInt(item.time.slice(-6, -3)) - 2);
            }
        })

        const items =  arr.map((item) => {
            return (
                <div className="cardBackground">
                    <section className="card">
                        <p className="cardTime">{item.time.slice(-5, -3)}<span>AM</span></p>
                        <img src={item.condition.icon} alt={item.condition.text} />
                        <p className='cardTemperature'>{item.temp_c}°</p>
                    </section>
                </div>
            )
        });
      
        return (
            <section className="weatherCards">
                {items}
            </section>
        )
    }


    render() {
        const { condition, temp, img, hours } = this.state;

        const items = this.renderItems(hours);

        return (
            <main>
                <div className="mainImg">
                    <img src={img} alt={condition} />
                </div>
                <section className='weatherState'>
                    <p>{condition}</p>
                    <p>{temp}°</p>
                </section>

                <section className="temperature">
                    <svg xmlns="http://www.w3.org/2000/svg" width="288" height="65" viewBox="0 0 288 65" fill="none">
                        <path d="M285.75 2.72998L278.899 15.4875C272.284 28.245 258.818 53.76 245.351 56.595C231.649 59.43 218.183 39.585 204.716 26.8275C191.25 14.07 177.784 8.39998 164.318 14.07C150.851 19.74 137.149 36.75 123.683 43.8375C110.216 50.925 96.75 48.09 83.2838 46.6725C69.8175 45.255 56.3513 45.255 42.6488 48.09C29.1825 50.925 15.7163 56.595 9.10127 59.43L2.25001 62.265" stroke="url(#paint0_linear_705_204)" stroke-opacity="0.7" stroke-width="3.6" stroke-linecap="round"/>
                        <defs>
                            <linearGradient id="paint0_linear_705_204" x1="2.25" y1="32.7" x2="285.75" y2="32.7" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#3FD1FF" stop-opacity="0"/>
                            <stop offset="0.177778" stop-color="#3FD1FF"/>
                            <stop offset="0.871951" stop-color="#FFA439"/>
                            <stop offset="1" stop-color="#FFA439" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                        <circle cx="6.3501" cy="7.19995" r="4.5" fill="#1D2837" stroke="#FFA439" stroke-width="3.6"/>
                    </svg>
                </section>

                {items}

            </main>
        )
    }
}

export default AppMain;