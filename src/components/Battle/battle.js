import React from 'react';
import './battle.css'

import BattleIcons from '../BattleIcons/battle-icons'

const Battle = ({selected}) => {
    const battleImagesArr = [
        {img : '/img/circle-dragon.png'},
        {img : '/img/circle-dragon.png'},
        {img : '/img/circle-dragon.png'},
        {img : '/img/circle-dragon.png'},
        {img : '/img/circle-dragon.png'},
        {img : '/img/circle-dragon.png'},
        {img : '/img/circle-dragon.png'}
        
    ]
    const elements = battleImagesArr.map((item) => {
        return (
<ul className='image-item-list'>
        <h1>{selected.hero}</h1>
<BattleIcons 
                {...item}
                />
</ul>
                
            
        )
    })
    //const { selected } = this.props.selected;
    return (
        

        <div className='battle-wrapper'
        //style = {{backgroundImage: `url(../../../public/img/mortal-kombat-background-battle.jpg)`}}
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
};

 export default Battle;
