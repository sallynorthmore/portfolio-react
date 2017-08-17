import React from 'react';

class Project extends React.Component {

  render() {
    const { details, index } = this.props;

    return (
      <div id={index}>
        <header>I am a project component
          <h1>{details.title}</h1>
          <p>{details.client} / <span>{details.agency}</span></p>
        </header>
        <div>
          Image: {details.image}
        </div>
        <p>{details.date}</p>
        <p>{details.desc}</p>
        <p>{details.gallery}</p>
        <footer>
          <p>Tech: {details.tech}</p>
          <p>Tools: {details.tools}</p>
        </footer>
      </div>
    )
  }
}

export default Project;
