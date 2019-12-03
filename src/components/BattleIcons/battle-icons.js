import React from 'react';
import './battle-icons.css';

const BattleIcons = ({img})=> {
    return( 
        
            <div className='battle-icons rotate-center'
            style={{
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        }}>

        </div>
      
    
    )
};
 
export default BattleIcons;
