import { Component } from 'react';
import './card-list.styles.css'
import Card from '../card/card.component'

class CardList extends Component {
  render() {
    const { cards } = this.props;

    return (
      <div className='card-list'>
        {cards.map((card) => {
          return (
            <Card card={card}/>
          )
        })}
      </div>
    );
  }
}

export default CardList;