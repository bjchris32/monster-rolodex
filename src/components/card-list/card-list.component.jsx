import './card-list.styles.css'
import Card from '../card/card.component'

const CardList = ({ cards }) => ( // props will be destructed to cards
  // implicit return with (); instead of using {};
  <div className='card-list'>
    {cards.map((card, id) => {
      return (
        <Card card={card} key={id}/>
      )
    })}
  </div>
);


export default CardList;
