import React from 'react';

class Details extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <div className="sideTable">
          Items in Category: ({this.props.category})
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
        </div>
      );
    }
  }
  
  export default Details;