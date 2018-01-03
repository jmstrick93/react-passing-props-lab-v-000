import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component{

  constructor(){
    super()
    this.state={
      filters: []
    }
  }

  render(){
    return(
      <FruitBasket />
    )
  }

}

export default App;
