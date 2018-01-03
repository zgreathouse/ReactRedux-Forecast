import React, { Component } from 'react';

//components
import SearchBar from './SearchBar';
import ForecastList from './ForecastList';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ForecastList />
      </div>
    );
  }
}
