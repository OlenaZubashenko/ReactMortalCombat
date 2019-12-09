import React from 'react';
import './hero.css';


export default class Hero extends React.Component {

    render() {
        const { id, name, url, fullImg } = this.props;

        return (
            <div id={`hero_${id}`} style={{
                backgroundImage: `url(${url})`,
                backgroundPosition: 'top center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                boxSizing: 'border-box'
            }}>
            </div>
        )
    }
};

