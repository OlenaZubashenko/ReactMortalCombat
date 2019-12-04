import React from 'react';
import ReactDOM from 'react-dom';
import HeroList from './components/HeroList/hero-list';
import Battle from './components/Battle/battle';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {

    return (
        <div>
            <HeroList />
            <Router>
                <Route path='/battle' component={Battle} />
            </Router>

        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));
