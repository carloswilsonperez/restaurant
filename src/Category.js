import React from 'react';

class Categories extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <div className="categoriesNav">
          Menu Categories
            <ul>
                { this.props.categories.length > 0 && this.props.categories.map(category => <li onClick={() => this.props.getDetails(category['short_name'])}>{category.name} - {category['short_name']}</li>) }
            </ul>
        </div>
      );
    }
  }
  
  export default Categories;