import React from 'react';
import ReactDOM from 'react-dom';
import HeroList from './components/HeroList/hero-list';
import Battle from './components/Battle/battle';

const App = () => {

    return (
        <div>
        <HeroList />
        <Battle />
        </div>
    )
};
 
ReactDOM.render(<App />, document.getElementById('root'));
