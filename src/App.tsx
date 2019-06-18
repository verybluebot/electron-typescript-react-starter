import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

// components
import { MainScreen, SecondScreen } from './screens';

// styles
import './app.scss';

const App: React.FC = () => {
    return (
        <div className="app-wrapper">
            <HashRouter>
                <div className="app-container">
                    <Switch>
                        <Route exact path="/" component={MainScreen} />
                        <Route exact path="/second-screen" component={SecondScreen} />
                        <Route component={MainScreen} />
                    </Switch>
                </div>
            </HashRouter>
        </div>
    );
};

export default App;
