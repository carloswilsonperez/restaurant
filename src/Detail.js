import React from 'react';

class Details extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <React.Fragment>
          <span className="title">Items in Category: ({this.props.category})</span>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              { this.props.details.map(detail => <tr><td>{detail.name}</td><td>{detail.description}</td></tr>)}
            </tbody>
          </table>
        </React.Fragment>
      );
    }
  }
  
  export default Details;