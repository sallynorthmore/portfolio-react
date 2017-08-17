import React from 'react';
// import React from 'react';
import { getFunName } from '../helpers';

class ProjectPicker extends React.Component {

  // Custom method
  //
  // Custom methods aren't bound to the class by default
  //
  // You can either use the constructor/super approach, or bind within the render as below
  goToStore(event) {
    event.preventDefault();
    // grab text from box
    // console.log(this.storeInput.value);
    const storeid = this.storeInput.value;

    // transition from / to /:storeid
    // Use the context setup at the bottom of file
    this.context.router.transitionTo(`/project/${storeid}`);
  }

  // Render is bound to the class
  render() {
    // Any where else comment like this
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        {/* Hello I'm a JSX comment */}
        <h2>Please endter a store</h2>
        <input type="text" required placeholder="Store Name" ref={(input) => {this.storeInput = input}} defaultValue={getFunName()} />
        <button type="submit">Visit store -></button>
      </form>
    )
  }
}

// You have to use context to reference the main router in your component
ProjectPicker.contextTypes = {
  router: React.PropTypes.object
}

export default ProjectPicker;
