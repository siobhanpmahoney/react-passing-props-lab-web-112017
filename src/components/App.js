import React from 'react';
import FruitBasket from './FruitBasket';
// import Filter from './Filter'
// import FilteredFruitList from './FilteredFruitList'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    };

  }

  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    console.log(this.state.currentFilter)
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <div>

        <FruitBasket filters={this.state.filters} updateFilterCallBack={this.handleFilterChange} fruit={this.state.fruit} currentFilter={this.state.currentFilter} />




      </div>
    )}

}

export default App;
