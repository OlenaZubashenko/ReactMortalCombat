import React from 'react';
import Hero from '../Hero/hero'

import './hero-list.css';

export default class HeroList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };

    this.setEventHandlers();
  }

  componentDidMount() {
    //fetch("https://api.example.com/items")
    new Promise(resolve =>
      setTimeout(() => {
        let data = [
          {
            name: 'kobra',
            url: '/img/kobra.png',
            selected: 'false'
          },
          {
            name: 'kano',
            url: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'kobra1',
            url: '/img/kobra.png',
            selected: 'false'
          },
          {
            name: 'kano1',
            url: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'kabal',
            url: '/img/kabal.png',
            selected: 'false'
          },
          {
            name: 'sector',
            url: '/img/Sektor.png',
            selected: 'false'
          },
          {
            name: 'Sheeva',
            url: '/img/Sheeva.png',
            selected: 'false'
          },
          {
            name: 'sindel',
            url: '/img/sindel.jpg',
            selected: 'false'
          },
          {
            name: 'stryker',
            url: '/img/Stryker.png',
            selected: 'false'
          },
          {
            name: 'kitana',
            url: '/img/kitana.png',
            selected: 'false'
          },
          {
            name: 'just',
            url: '/img/just.png',
            selected: 'false'
          },
          {
            name: 'frost',
            url: '/img/frost.png',
            selected: 'false'
          },
          {
            name: 'Ashrah',
            url: '/img/Ashrah.png',
            selected: 'false'
          },
          {
            name: 'kobra',
            url: '/img/kobra.png',
            selected: 'false'
          },
          {
            name: 'kano',
            url: '/img/kano.jpg',
            selected: 'false'
          },
          {
            name: 'kabal',
            url: '/img/kabal.png',
            selected: 'false'
          },
          {
            name: 'sector',
            url: '/img/Sektor.png',
            selected: 'false'
          },
          {
            name: 'Sheeva',
            url: '/img/Sheeva.png',
            selected: 'false'
          },
          {
            name: 'sindel',
            url: '/img/sindel.jpg',
            selected: 'false'
          },
          {
            name: 'stryker',
            url: '/img/Stryker.png',
            selected: 'false'
          },
          {
            name: 'kitana',
            url: '/img/kitana.png',
            selected: 'false'
          },
          {
            name: 'just',
            url: '/img/just.png',
            selected: 'false'
          },
          {
            name: 'frost',
            url: '/img/frost.png',
            selected: 'false'
          },
          {
            name: 'Ashrah',
            url: '/img/Ashrah.png',
            selected: 'false'
          }];

        let i = 1;
        data.map(e=>e.id = i++)

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
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (err) => {
          this.setState({
            isLoaded: true,
            error: err
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
    if(!this.activeCellId){
      this.activeCellId = 1;
    }
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div className='hero-list-wrapper'>
          <ul className='hero-table'>
            {
              <table>
                <tbody id='heroes'>
                  <tr>
                    <td><Hero {...items[0]} /></td>
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
                    <td rowSpan='2' style={{ background: 'red' }}>tyDbl</td>
                    <td><Hero {...items[14]} /></td>
                    <td><Hero {...items[15]} /></td>
                    <td><Hero {...items[16]} /></td>
                    <td><Hero {...items[17]} /></td>
                    <td><Hero {...items[18]} /></td>
                    <td rowSpan='2' style={{ background: 'red' }}>CyDbl</td>
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

            };
        </ul>
        </div>

      );
    }
  }

  setEventHandlers = () => {
    window.onkeyup = (e) => {
      if (e.key === 'ArrowLeft')
        this.activeCellId = checkSiblingHero( this.activeCellId,-1);
      else if (e.key === 'ArrowRight')
      this.activeCellId = checkSiblingHero(this.activeCellId, 1);
      else if (e.key === 'ArrowUp')
        checkUpHero();
      else if (e.key === 'ArrowDown')
        checkDownHero();
      updateSelection(this.activeCellId);
    }
  }
}
const checkUpHero = () => {
  console.log('up');
};
const checkDownHero = () => {
  console.log('down');
};
const checkSiblingHero = (activeCellId,i) => {
  activeCellId += i;
  activeCellId = 
    activeCellId === 0 ? 24 :
    activeCellId === 25 ? 1 : activeCellId;
  return  activeCellId;
}

const updateSelection = (id) => {
  var els = document.getElementsByClassName("active");
  [].forEach.call(els, function (el) {el.classList.remove('active');});
    
  document.getElementById(`hero_${id}`).classList.add('active');
};
