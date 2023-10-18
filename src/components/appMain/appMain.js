import { Component } from'react';
import WeatherService from '../services/WeatherService';

import './appMain.css';

class AppMain extends Component {
    state = {
        condition: null,
        time: null
    }

    weatherService = new WeatherService();

    componentDidMount() {
        this.updateMain();
    }

    updateMain = () => {

    }


    render() {
        return (
            <main>
                <div className="mainImg">
                    <img src='https://s3-alpha-sig.figma.com/img/4b11/648f/04428373d3ffc3d5ab15a19db807e273?Expires=1698624000&Signature=ESdg3VG7c5VaDvq7wY~p7IVv6Sp5hGP8Foz6n4-8DCqlkbyUnfPzuW5zHvREXUmpbqoJjHU2b3XDfEADfA83x7cA6iLvfa0OcQ~Of~gK4QALu~KQMXKm~WXKtPdCUQ466QUM-VOa0f2DF3MfO0Xlub8Cz5FVf2vNS-T3~yw0-Tn1H5aFP4H1cTuEw-KQJdbjzHSpg5yUJsMF29NQMx56EBhJsiBU0BzR0voJ3119wy9O0wyfeJTIf~6LaUdSG1JYlEkUO-X9vY7nqFG5kceh4vjXbZbXAj-z45gsArqE~ZvlpY2Ce9qPlwVSLHZpsDdfJWxO5DKHRAfnoIxFv0~N6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt="Sun And Clude" />
                </div>
                <section className='weatherState'>
                    <p>partly cloudy</p>
                    <p>24°</p>
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

                <section className="weatherCards">
                    <div className="cardBackground">
                        <section className="card">
                            <p className="cardTime">9<span>AM</span></p>
                            <img src="https://s3-alpha-sig.figma.com/img/68d5/dae6/c9f6bd844d44fea2b13de41a10558631?Expires=1698624000&Signature=iWCdvDAyfWAKsVawflwEEGfRNTV1VtXWis8jifFPdqUNx1oiL5M2I7t6OkCnzhB1rdYk24o72s-Qx~iFxjqf6XmXh2DujFkXdJY58l72IEWFB83jUxgcVsnv--NhEzcvHTJMGsXNkeUTnrZpD1WaGuAY1NdpXf8G~S6Vna9AclHcH6YBMc7f5YzE~O8cfryE0rpFx6MRqe62sLm672zfdZHAjkvkqDIK-F7ESNzC5UsKE-ccp9qnzTyOc95B5HYxEoStFGRjLPjrkfHbuGYEuY~vmy0ph3rfz6dystSoyu~HfkwsbCsKEdwB-5kC8xbX8bZzxgtoRNoBG7jPbEYKCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Cloud" />
                            <p className='cardTemperature'>24°</p>
                        </section>
                    </div>
                    
                    <div className="cardBackground ">
                        <section className="card">
                            <p className="cardTime">9<span>AM</span></p>
                            <img src="https://s3-alpha-sig.figma.com/img/68d5/dae6/c9f6bd844d44fea2b13de41a10558631?Expires=1698624000&Signature=iWCdvDAyfWAKsVawflwEEGfRNTV1VtXWis8jifFPdqUNx1oiL5M2I7t6OkCnzhB1rdYk24o72s-Qx~iFxjqf6XmXh2DujFkXdJY58l72IEWFB83jUxgcVsnv--NhEzcvHTJMGsXNkeUTnrZpD1WaGuAY1NdpXf8G~S6Vna9AclHcH6YBMc7f5YzE~O8cfryE0rpFx6MRqe62sLm672zfdZHAjkvkqDIK-F7ESNzC5UsKE-ccp9qnzTyOc95B5HYxEoStFGRjLPjrkfHbuGYEuY~vmy0ph3rfz6dystSoyu~HfkwsbCsKEdwB-5kC8xbX8bZzxgtoRNoBG7jPbEYKCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Cloud" />
                            <p className='cardTemperature'>24°</p>
                        </section>
                    </div>

                    <div className="cardBackground selected">
                        <section className="card">
                            <p className="cardTime">9<span>AM</span></p>
                            <img src="https://s3-alpha-sig.figma.com/img/68d5/dae6/c9f6bd844d44fea2b13de41a10558631?Expires=1698624000&Signature=iWCdvDAyfWAKsVawflwEEGfRNTV1VtXWis8jifFPdqUNx1oiL5M2I7t6OkCnzhB1rdYk24o72s-Qx~iFxjqf6XmXh2DujFkXdJY58l72IEWFB83jUxgcVsnv--NhEzcvHTJMGsXNkeUTnrZpD1WaGuAY1NdpXf8G~S6Vna9AclHcH6YBMc7f5YzE~O8cfryE0rpFx6MRqe62sLm672zfdZHAjkvkqDIK-F7ESNzC5UsKE-ccp9qnzTyOc95B5HYxEoStFGRjLPjrkfHbuGYEuY~vmy0ph3rfz6dystSoyu~HfkwsbCsKEdwB-5kC8xbX8bZzxgtoRNoBG7jPbEYKCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Cloud" />
                            <p className='cardTemperature'>24°</p>
                        </section>
                    </div>

                    <div className="cardBackground">
                        <section className="card">
                            <p className="cardTime">9<span>AM</span></p>
                            <img src="https://s3-alpha-sig.figma.com/img/68d5/dae6/c9f6bd844d44fea2b13de41a10558631?Expires=1698624000&Signature=iWCdvDAyfWAKsVawflwEEGfRNTV1VtXWis8jifFPdqUNx1oiL5M2I7t6OkCnzhB1rdYk24o72s-Qx~iFxjqf6XmXh2DujFkXdJY58l72IEWFB83jUxgcVsnv--NhEzcvHTJMGsXNkeUTnrZpD1WaGuAY1NdpXf8G~S6Vna9AclHcH6YBMc7f5YzE~O8cfryE0rpFx6MRqe62sLm672zfdZHAjkvkqDIK-F7ESNzC5UsKE-ccp9qnzTyOc95B5HYxEoStFGRjLPjrkfHbuGYEuY~vmy0ph3rfz6dystSoyu~HfkwsbCsKEdwB-5kC8xbX8bZzxgtoRNoBG7jPbEYKCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Cloud" />
                            <p className='cardTemperature'>24°</p>
                        </section>
                    </div>

                    <div className="cardBackground">
                        <section className="card">
                            <p className="cardTime">9<span>AM</span></p>
                            <img src="https://s3-alpha-sig.figma.com/img/68d5/dae6/c9f6bd844d44fea2b13de41a10558631?Expires=1698624000&Signature=iWCdvDAyfWAKsVawflwEEGfRNTV1VtXWis8jifFPdqUNx1oiL5M2I7t6OkCnzhB1rdYk24o72s-Qx~iFxjqf6XmXh2DujFkXdJY58l72IEWFB83jUxgcVsnv--NhEzcvHTJMGsXNkeUTnrZpD1WaGuAY1NdpXf8G~S6Vna9AclHcH6YBMc7f5YzE~O8cfryE0rpFx6MRqe62sLm672zfdZHAjkvkqDIK-F7ESNzC5UsKE-ccp9qnzTyOc95B5HYxEoStFGRjLPjrkfHbuGYEuY~vmy0ph3rfz6dystSoyu~HfkwsbCsKEdwB-5kC8xbX8bZzxgtoRNoBG7jPbEYKCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Cloud" />
                            <p className='cardTemperature'>24°</p>
                        </section>
                    </div>
                </section>

            </main>
        )
    }
}

export default AppMain;