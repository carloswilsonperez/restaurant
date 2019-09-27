import React from 'react';
import axios from 'axios';
import Details from './Detail';
import Categories from './Category';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      categories: [],
      details: [],
     };
  }

  componentDidMount() {
    axios.get('http://stream-restaurant-menu-svc.herokuapp.com/category')
    .then(response => {
      const categories = response.data;
      this.setState({ categories });
    })
    .catch(error => console.log(error));
    this.getDetails('SS');
  }

  getDetails = category => {
    axios.get('http://stream-restaurant-menu-svc.herokuapp.com/item?category=' + category)
    .then(response => {
      const details = response.data;
      const key = category;
      this.setState({ details, key });
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="content">
        <div className="categoriesNav">
          <Categories categories={this.state.categories} getDetails={this.getDetails}></Categories>
        </div>
        <div className="sideTable">
          <Details category={this.state.key} details={this.state.details}></Details>
        </div>
      </div>
    );
  }
}

export default App;
