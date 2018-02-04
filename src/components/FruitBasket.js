import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({filters, updateFilterCallback, fruit, currentFilter}) => {
  return (
    <div className="fruit-basket">
      <Filter filters={filters} handleChange={updateFilterCallback} />
      <FilteredFruitList fruit={fruit} filter={currentFilter} />
    </div>
  )
}

FruitBasket.defaultProps = {filters: [], fruit: [], currentFilter: null, updateFilterCallback: () => {} }



export default FruitBasket;
