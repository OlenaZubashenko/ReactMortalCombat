import React from 'react';
import HeroList from '../HeroList/hero-list';

const ChooseHero = ({resourse}) => {
const elements = resourse.map((item) => {
    return (
        <div>
            <HeroList
            {...item}
            />
        </div>
    )
})

    return (
        <ul>
       <li>1</li>   
       <li>2</li>
       {elements}
        </ul>

    )
};
 
export default ChooseHero;
