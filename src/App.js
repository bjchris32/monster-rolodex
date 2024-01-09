import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  console.log('render App');

  const [searchField, setSearchField] = useState(''); // [currentSate, setStateFunc]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  // the effect will execute without any dependent state
  // So, it will only execute when mount and unmount
  useEffect(() => {
    console.log('fetch users!');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users))
  }, []);

  // filter the monster when original monsters or search filed changes
  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilterMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();
    setSearchField(searchString)
  }

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

export default App;
