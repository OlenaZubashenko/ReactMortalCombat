import React from 'react';
import './battle.css'
import HeroList from '../HeroList/hero-list';
import BattleIcons from '../BattleIcons/battle-icons'

export default class Battle  extends React.Component { 
    constructor(props) {
        super(props);
        this.state=props.location.state;
    }
    render () {
const 

        battleImagesArr = [
            {key:'1',img : '/img/circle-dragon.png'},
            {key:'2',img : '/img/circle-dragon.png'},
            {key:'3',img : '/img/circle-dragon.png'},
            {key:'4',img : '/img/circle-dragon.png'},
            {key:'5',img : '/img/circle-dragon.png'},
            {key:'6',img : '/img/circle-dragon.png'},
            {key:'7',img : '/img/circle-dragon.png'}
            
        ]
        const elements = battleImagesArr.map((item) => {
            return (
    <ul className='image-item-list'>
            <div><img src={this.state.selectedHero.url}/></div>
    <BattleIcons 
                    {...item}
                    />
    </ul>
                             
            )
        })
        //const { selected } = this.props.selected;
        return (
            
                <div className='battle-wrapper'
            >
                <h1>Battle 1</h1>
                <ul>
        <li>From Battle Component</li>
                    <li>From Battle Component</li>
                </ul>
                <div className='icons-wrapper'>
                {elements}
                </div>
              
            </div>
    
        )
    }
    
};

