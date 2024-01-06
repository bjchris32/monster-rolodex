import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
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

  // when state changes(Setstate), it will re-render the component by calling render multiple times
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })
        }
      </div>
    );
  }
}

export default App;
