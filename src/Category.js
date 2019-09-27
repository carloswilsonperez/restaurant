import React from 'react';

class Categories extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <React.Fragment>
          <span className="title">Menu Categories</span>
            <ul>
                { this.props.categories.length > 0 && this.props.categories.map(category => <li onClick={() => this.props.getDetails(category['short_name'])}>{category.name} - {category['short_name']}</li>) }
            </ul>
        </React.Fragment>
      );
    }
  }
  
  export default Categories;