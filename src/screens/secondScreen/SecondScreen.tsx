import React from 'react';
import { Link } from 'react-router-dom';

// types
// import { Props, defaultProps } from './types';

// images
import logo from '../../logo.svg';


// styles
import './secondScreen.scss';

// Functional Component have only props that can be passed from the parent component
const SecondScreen = () => {
    return (
        <div className="main-screen-wrapper">
            <header className="header">
                <img src={logo} className="logo" alt="logo" />
                <p>
                    you just used React Router over here!
                </p>
                <Link
                    className="link"
                    to="/"
                >
                    Main Screen
                </Link>
            </header>
        </div>
    )
};

export default SecondScreen;
