import { Component } from 'react';

class CardList extends Component {
  render() {
    const { cards } = this.props;

    return (
      <div>
        {cards.map((card) => (
          <h1 key={card.id}>{card.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;