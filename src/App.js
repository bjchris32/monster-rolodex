import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: ''
    };
  }

  // render the response from API call immediately
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users }
        },
        () => {
          // callback to confirm in log
          console.log(this.state)
        }
      ));
  }

  onSearchChange =  (event) => {
    console.log(event.target.value);
    const searchString = event.target.value.toLowerCase();

    this.setState(() => {
      // TIPS: same variable name will replace the value with the same key in state
      return { searchString };
    });
  }

  // when state changes(Setstate), it will re-render the component by calling render multiple times
  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters</h1>
        <SearchBox
          className='search-box'
          placeholder='Search monsters'
          onChangeHandler={onSearchChange}
        />
        <CardList cards={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
