import React from 'react';

const HeroList = ({ name, url }) => {
    
       

        return (
            <div>
                <span>{name}</span>
                <img src={url} alt={name}></img>
            </div>
        )
    
    
};
export default HeroList;
