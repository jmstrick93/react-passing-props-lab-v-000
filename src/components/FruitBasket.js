import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({filters, currentFilter, fruit, handleFilterChange}) => (

      <div className="fruit-basket">
        <Filter filters={filters} handleChange={handleFilterChange} />
        <FilteredFruitList
          filter={currentFilter}
          fruit={fruit} />
      </div>
    );

FruitBasket.defaultProps ={
  fruit: [],
  filters: [],
  currentFilter: ()=> console.log("Please input a CurrentFilter prop"),
  updateFilterCallback: ()=> console.log("Please input a updateFilterCallback prop"),
}



export default FruitBasket;
