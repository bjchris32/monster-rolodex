import { useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); // [currentSate, setStateFunc]
  console.log({searchField});
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
      {/* <CardList cards={filteredMonsters}/> */}
    </div>
  );
}

export default App;
