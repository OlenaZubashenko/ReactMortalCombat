import React from 'react';
import HeroList from './components/HeroList/hero-list';
import Battle from './components/Battle/battle';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css'

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    let selectedHero = {};
    return (
        <div>
            <Router>
                <ul className='chooseYourHero'>
                    <li ><Link to={{ pathname: '/select' }}>Chose your hero</Link></li>
                    {/* <li><Link to='battle'>battle</Link></li> */}
                </ul>
                <Switch>
                    <Route path='/select'>
                        <HeroList selectedHero={selectedHero}/>
                    </Route>
                    <Route path='/battle' component={Battle}/>
                </Switch>
            </Router>
        </div>
    )
}}

