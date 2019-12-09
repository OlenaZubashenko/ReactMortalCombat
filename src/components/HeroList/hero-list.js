import React from 'react';
import Hero from '../Hero/hero';
import { Redirect } from 'react-router-dom'
import './hero-list.css';
import Battle from '../Battle/battle';


export default class HeroList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      selectedHero: props.selectedHero
    };
    this.setEventHandlers();
  }

  componentDidMount() {

    new Promise(resolve =>
      setTimeout(() => {
        let data = [
          {
            name: 'kobra',
            url: '/img/kobra.png',
            fullImg: '/img/kano.jpg',
            selected: 'false',
          },
          {
            name: 'body',
            url: '/img/body.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'kobra1',
            url: '/img/kobra.png',
            fullImg: '/img/kobra.png',
            selected: 'false'
          },
          {
            name: 'Noobcutout',
            url: '/img/Noobcutout.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'kabal',
            url: '/img/kabal.png',
            fullImg: '/img/kabal.png',
            selected: 'false'
          },
          {
            name: 'sector',
            url: '/img/Sektor.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'Sheeva',
            url: '/img/Sheeva.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'sab',
            url: '/img/sab.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'stryker',
            url: '/img/Stryker.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'kitana',
            url: '/img/kitana.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'scorpion',
            url: '/img/scorpion.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'frost',
            url: '/img/frost.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'Ashrah',
            url: '/img/Ashrah.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'cyrax',
            url: '/img/cyrax.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'sab',
            url: '/img/sab.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'subzero',
            url: '/img/subzero.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'shao',
            url: '/img/Shao-Khan.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'quan',
            url: '/img/quan.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'cutout',
            url: '/img/cutout.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'Noobcutout',
            url: '/img/Noobcutout.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'Jaxcutmk9zo',
            url: '/img/Jaxcutmk9zo.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'body',
            url: '/img/body.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'frost',
            url: '/img/frost.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          
          {
            name: 'Sheeva',
            url: '/img/Sheeva.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'main',
            url: '/img/main.jpg',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
         ];

        let i = 1;
        data.map(e => e.id = i++)

        resolve(data);
      }, 100))
      //.then(res => res.json())
      .then(
        (x) => {
          this.setState({
            isLoaded: true,
            items: x
          });
        },

        (err) => {
          this.setState({
            isLoaded: true,
            error: err,

          });
        }
      )
  }
  componentDidUpdate() {
    if (!this.activeCellId) {
      this.activeCellId = 1;
      this.updateSelection();
    }
  }
  render() {
    const { error, isLoaded, items, selectedHero, redirect } = this.state;
    if (redirect) {
      return <Redirect to={{
        pathname: '/battle',
        state: { selectedHero }
      }} />;
    }
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка... </div>;
    } else {

      return (

        <div className='hero-list-wrapper'>

          <div className='div1'><Hero {...items[0]} /></div>
          <div className='div2'><Hero {...items[1]} /></div>
          <div className='div3'><Hero {...items[2]} /></div>
          <div className='div4'><Hero {...items[3]} /></div>
          <div className='div5'><Hero {...items[4]} /></div>
          <div className='div6'><Hero {...items[5]} /></div>
          <div className='div7'><Hero {...items[6]} /></div>
          <div className='div8'><Hero {...items[7]} /></div>
          <div className='div9'><Hero {...items[8]} /></div>
          <div className='div10'><Hero {...items[9]} /></div>
          <div className='div11'><Hero {...items[10]} /></div>
          <div className='div12'><Hero {...items[11]} /></div>
          <div className='div13'><Hero {...items[12]} /></div>
          <div className='div14'><Hero {...items[13]} /></div>
          <div className='div15'><Hero {...items[14]} /></div>
          <div className='div16'><Hero {...items[15]} /></div>
          <div className='div17'><Hero {...items[16]} /></div>
          <div className='div18'><Hero {...items[17]} /></div>
          <div className='div19'><Hero {...items[18]} /></div>
          <div className='div20'><Hero {...items[19]} /></div>
          <div className='div21'><Hero {...items[20]} /></div>
          <div className='div22'><Hero {...items[21]} /></div>
          <div className='div23'><Hero {...items[22]} /></div>
          <div className='div24'><Hero {...items[23]} /></div>
          <div className='selected'><Hero {...selectedHero} /></div>
          <div className='div26'><Hero {...items[24]} /></div>
        </div>

      );
    }
  }

  setEventHandlers = () => {
    window.onkeyup = (e) => {
      if (e.key === 'Enter') {
        this.setState({ redirect: true });
      } else {
        if (e.key === 'ArrowLeft')
          this.activeCellId = moveHorisontal(this.activeCellId, -1);

        else if (e.key === 'ArrowRight')
          this.activeCellId = moveHorisontal(this.activeCellId, 1)

        else if (e.key === 'ArrowUp')
          this.activeCellId = moveVertical(this.activeCellId, -1);

        else if (e.key === 'ArrowDown')
          this.activeCellId = moveVertical(this.activeCellId, 1);

        this.updateSelection();
      }
    }
  }

  ChooseHero = () => {
    this.setState({
      selectedHero: this.state.items.find(i => i.id == this.activeCellId)
    });
  };

  updateSelection = () => {
    let id = this.activeCellId;
    var els = document.getElementsByClassName("active");
    [].forEach.call(els, function (el) { el.classList.remove('active'); });

    document.getElementById(`hero_${id}`).classList.add('active');
    this.ChooseHero(id);
  };
}
const moveVertical = (activeCellId, i) => {
  // activeCellId += i;
  // activeCellId = 

  // activeCellId === 0 ? 0 :
  //   activeCellId === 25 ? 1 : activeCellId;
  return activeCellId;

};
const moveHorisontal = (activeCellId, i) => {
  activeCellId += i;
  activeCellId =
    activeCellId === 0 ? 24 :
      activeCellId === 25 ? 1 : activeCellId;
  return activeCellId;
}

// const ChooseHero = (id) => {

// };


