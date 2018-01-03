import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

class FruitBasket extends Component {

  render() {
    return (
      <div className="fruit-basket">
        <Filter filtersList={this.props.filtersList} handleChange={this.handleFilterChange} />
        <FilteredFruitList
          filter={this.props.selectedFilter}
          items={this.props.items} />
      </div>
    );
  }
}

export default FruitBasket;
