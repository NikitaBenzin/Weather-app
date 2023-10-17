import { Component } from'react';

import './appMain.css';

class AppMain extends Component {
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
            </main>
        )
    }
}

export default AppMain;