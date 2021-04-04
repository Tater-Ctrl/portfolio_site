import React from 'react';
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="header_base" id="myHeader">
                <div className="header_left">
                    <a href="home" id="header_link"><h1>RICHARD EGELI</h1></a>
                </div>
                <div className="header_right">
                    <a href="#portfolio" id="header_link"><h4>PORTFOLIO</h4></a>
                    <span id="header_seperation_line"></span>
                    <a href="#gamejams" id="header_link"><h4>GAME JAMS</h4></a>
                    <span id="header_seperation_line"></span>
                    <a href="https://www.linkedin.com/in/richard-egeli-28006a1b4/" target="_blank" rel="noreferrer" id="header_link"><h4>LINKEDIN</h4></a>
                    <span id="header_seperation_line"></span>
                    <a href="https://github.com/Tater-Ctrl" target="_bank" rel="noreferrer" id="header_link"><h4>GITHUB</h4></a>
                    <span id="header_seperation_line"></span>
                    <a href="home" id="header_link"><h4>ABOUT ME</h4></a>
                </div>
            </div>
        )
    }
}

export default Header;