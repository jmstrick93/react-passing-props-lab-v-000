import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{

  constructor(){
    super()
    this.state= {
      filtersList: [],
      items: []
    }
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
        .then(filters => this.setState({ filters }));
  }


  render(){
    return(
      <FruitBasket filtersList={this.state.filtersList} items={this.state.items}/>
    )
  }

}

export default App;
