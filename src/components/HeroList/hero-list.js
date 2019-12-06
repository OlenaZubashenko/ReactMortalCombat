import React from 'react';
import Hero from '../Hero/hero'

import './hero-list.css';

export default class HeroList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      
    };
    this.layout = [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [0, 15, 16, 17, 18, 19, 0],
      [0, 20, 21, 22, 23, 24, 0],
    ];

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
            row: 0,
            column: 0
          },
          {
            name: 'kano',
            url: '/img/kano.jpg',
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
            name: 'kano1',
            url: '/img/kano.jpg',
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
            name: 'sindel',
            url: '/img/sindel.jpg',
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
            name: 'just',
            url: '/img/just.png',
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
            name: 'kobra',
            url: '/img/kobra.png',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'kano',
            url: '/img/kano.jpg',
            fullImg: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'kabal',
            url: '/img/kabal.png',
            fullImg: '/img/kano.jpg',
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
            name: 'sindel',
            url: '/img/sindel.jpg',
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
            name: 'just',
            url: '/img/just.png',
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
          }];

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
    // if (!this.cells) {
    //   let table = document.getElementById('heroes')
    //   let rows = table.childNodes;
    //   this.Cells = [];debugger
    //   rows.forEach(row => {
    //     row.childNodes.forEach(c => {
    //       if(c) return
    //     });
    //   });
    // }
    if (!this.activeCellId) {
      this.activeCellId = 1;
    }

  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка... </div>;
    } else {
      return (
        <div className='hero-list-wrapper'>
            <table>
              <tbody id='heroes'>
                <tr>
                  <td><Hero {...items[0]} />
                   
                  </td>
                  <td><Hero {...items[1]} /></td>
                  <td><Hero {...items[2]} /></td>
                  <td><Hero {...items[3]} /></td>
                  <td><Hero {...items[4]} /></td>
                  <td><Hero {...items[5]} /></td>
                  <td><Hero {...items[6]} /></td>
                </tr>
                <tr>
                  <td><Hero {...items[7]} /></td>
                  <td><Hero {...items[8]} /></td>
                  <td><Hero {...items[9]} /></td>
                  <td><Hero {...items[10]} /></td>
                  <td><Hero {...items[11]} /></td>
                  <td><Hero {...items[12]} /></td>
                  <td><Hero {...items[13]} /></td>
                </tr>
                <tr>
                  <td rowSpan='2' style={{ background: 'red' }} ></td>
                  <td><Hero {...items[14]} /></td>
                  <td><Hero {...items[15]} /></td>
                  <td><Hero {...items[16]} /></td>
                  <td><Hero {...items[17]} /></td>
                  <td><Hero {...items[18]} /></td>
                  <td rowSpan='2'> <Hero fullImg={this.fullImg} /> sdffff</td>
                </tr>
                <tr>
                  <td><Hero {...items[19]} /></td>
                  <td><Hero {...items[20]} /></td>
                  <td><Hero {...items[21]} /></td>
                  <td><Hero {...items[22]} /></td>
                  <td><Hero {...items[23]} /></td>
                </tr>
              </tbody>
            </table>
          }

        </div>

      );
    }
  }

  setEventHandlers = () => {
    window.onkeyup = (e) => {
      if (e.key === 'ArrowLeft')
        this.activeCellId = moveHorisontal(this.activeCellId, -1);

      else if (e.key === 'ArrowRight')
        this.activeCellId = moveHorisontal(this.activeCellId, 1)

      else if (e.key === 'ArrowUp')
        this.activeCellId = moveVertical(this.activeCellId, -1);

      else if (e.key === 'ArrowDown')
        this.activeCellId = moveVertical(this.activeCellId, 1);

      updateSelection(this.activeCellId);
    }
  }
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

const updateSelection = (id) => {
  var els = document.getElementsByClassName("active");
  [].forEach.call(els, function (el) { el.classList.remove('active'); });

  document.getElementById(`hero_${id}`).classList.add('active');
};

