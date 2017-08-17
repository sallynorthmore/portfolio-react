import React from 'react';

class Hero extends React.Component {

  render() {
    // Any where else comment like this
    return (
      <div className="Hero">
        <img src={this.props.image} alt={this.props.title} className="image" />
        <header className="header">
          <h1 className="title">
            {this.props.title}
          </h1>
          <p className="subtitle">
            {this.props.subtitle}
          </p>
        </header>
      </div>
    )
  }
}

export default Hero;
