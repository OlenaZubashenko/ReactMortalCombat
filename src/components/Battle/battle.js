import React from 'react';
import './battle.css'
import BattleIcons from '../BattleIcons/battle-icons'

export default class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.location.state;
    }
    render() {
        const

            battleImagesArr = [
                { key: '1', img: `${process.env.PUBLIC_URL}/img/circle-dragon.png` },
                { key: '2', img: `${process.env.PUBLIC_URL}/img/circle-dragon.png` },
                { key: '3', img: `${process.env.PUBLIC_URL}/img/circle-dragon.png` },
                { key: '4', img: `${process.env.PUBLIC_URL}/img/circle-dragon.png` },
                { key: '5', img: `${process.env.PUBLIC_URL}/img/circle-dragon.png` },
                { key: '6', img: `${process.env.PUBLIC_URL}/img/circle-dragon.png` }                

            ]
        const elements = battleImagesArr.map((item) => {
            return (
                <ul className='image-item-list'>
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
                <ul className='heroes-battle-wrapper'>
                    <div><img src={`${process.env.PUBLIC_URL}/${this.state.selectedHero.url}`}/></div>
                    <div className='second-hero'><img src={`${process.env.PUBLIC_URL}/${this.state.selectedHero.url}`}/></div>
                </ul>
                <div className='icons-wrapper'>
                    {elements}
                </div>

            </div>

        )
    }

};


