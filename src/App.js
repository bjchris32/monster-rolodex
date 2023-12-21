import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "bj", lastName: "sh" }
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstName} {this.state.name.lastName}</p>
          <button
            onClick={ () => {
              this.setState(
                () => {
                  return {
                    name: { firstName: "andrei", lastName: "lala" }
                  };
                },
                () => {
                  // optional callback to ensure it will execute the function only after setting state
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
