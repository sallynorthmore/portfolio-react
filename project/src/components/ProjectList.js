import React from 'react';
import Project from './Project';

class ProjectList extends React.Component {

  constructor() {
    super();
    // this.renderOrder = this.renderOrder.bind(this);
  }


  render() {
    // const orderIds = Object.keys(this.props.order);

    return (
      <div>
        <h2>Work</h2>
        <ul className="list-of-fishes">

        </ul>
      </div>
    )
  }
}

export default ProjectList;
