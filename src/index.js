import React from 'react';
import ReactDOM from 'react-dom';
import ChooseHero from './components/ChooseHero/choose-hero';
import Battle from './components/Battle/battle';

const App = () => {

const sourse = [
    { name: 'kobra',
    url: '/img/kobra.png',
    selected: 'false'

    }
];

    return (
        <div>
        <ChooseHero resourse = {sourse} />
        <Battle />
        </div>
    )
};
 
ReactDOM.render(<App />, document.getElementById('root'));
