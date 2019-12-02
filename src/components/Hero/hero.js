import React from 'react';
import './hero.css';

const Hero = ({id, name, url }) => {



    return (
        <div id={`hero_${id}`} style={{
            backgroundImage: `url(${url})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        }}>
            <span>{name}</span>
           
        </div>
    )


};
export default Hero;
