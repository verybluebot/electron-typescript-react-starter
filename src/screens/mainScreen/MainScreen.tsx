import React from 'react';
import { Link } from 'react-router-dom';

// types
// import { Props, defaultProps } from './types';

// images
import logo from '../../logo.svg';


// styles
import './mainScreen.scss';

// Functional Component have only props that can be passed from the parent component
const MainScreen = () => {
    return (
        <div className="main-screen-wrapper">
            <header className="header">
                <img src={logo} className="logo" alt="logo" />
                <p>
                    hello there! Im Montserrat thin font
                </p>
                <Link
                    className="link"
                    to="/second-screen"
                >
                    Go To Second Screen
                </Link>
            </header>
        </div>
    )
};

export default MainScreen;
