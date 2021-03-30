import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer_container">
                <h2>The code for this website is available on <a href="https://github.com/Tater-Ctrl/portfolio_site" target="_blank" rel="noreferrer">Github</a></h2>
                <div className="footer_info">
                    <div>
                        <ul>
                            <li><h3>Email: Richard.egeli@hotmail.com</h3></li>
                        </ul>
                        
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}