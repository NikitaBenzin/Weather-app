import { Component } from'react';

import './appHeader.css';

class AppHeader extends Component {
    render() {
        return (
            <header>
                <p>Los Angeles</p>
                <time>11:00</time>
            </header>
        )
    }
}

export default AppHeader;