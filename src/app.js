import React from 'react';
import ReactDOM from 'react-dom';
import HeroList from './components/HeroList/hero-list';


import Battle from './components/Battle/battle';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
  let selectedHero = {hero : 'HAAAA'};
    return (
        <div>
            <Router>
                <ul>
                    <li><Link to={{ pathname: '/select', query: { name: 'ryan' } }}>Hero selection</Link></li>
                    <li><Link to='battle'>battle</Link></li>
                </ul>
                <Switch>
                    <Route path='/select'>
                        <HeroList />
                    </Route>
                    <Route path='/battle' component={() => <Battle selected={selectedHero} />}/>
                </Switch>
            </Router>
        </div>
    )
}}

