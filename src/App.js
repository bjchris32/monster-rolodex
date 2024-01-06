import { Component } from 'react';
import logo from './logo.svg';
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
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchString);
    });

    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='Search monsters'
          onChange={this.onSearchChange}
        />
        {
          filteredMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })
        }
      </div>
    );
  }
}

export default App;
