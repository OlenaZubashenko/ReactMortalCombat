import React from 'react';
import './hero.css';


export default class Hero extends React.Component {

    onNameClick = () => {
        console.log(this.props.fullImg);
    }

    render() {
        const { id, name, url, fullImg } = this.props;

        return (
            <div id={`hero_${id}`} style={{
                backgroundImage: `url(${url})`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
            }}>
                <span onClick={this.onNameClick} >
                    {name}
                </span>

            </div>
        )
    }
};

