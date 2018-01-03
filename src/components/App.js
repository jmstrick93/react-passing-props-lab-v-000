import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{

  constructor(){
    super()
    this.state= {
      filtersList: [],
      items: [],
      selectedFilter: null
    }
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

  componentWillMount() {
    this.fetchFilters();

    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  fetchFilters = () => {
      fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filtersList => this.setState({ filtersList }));
  }


  render(){
    return(
      <FruitBasket
        selectedFilter= {this.state.selectedFilter}
        handleFilterChange={this.handleFilterChange}
        filtersList={this.state.filtersList}
        items={this.state.items}/>
    )
  }

}

export default App;
