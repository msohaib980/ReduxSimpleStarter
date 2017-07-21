import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = "AIzaSyBzUSqr_4KUMXyvnvVWe9VHh7QVtMqPhgk";

const App = function(){
  return <div>
    <SearchBar />
  </div>;

}

  ReactDOM.render(<App />,document.querySelector('.container'));
