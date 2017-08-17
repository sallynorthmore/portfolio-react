import React from 'react';
import Hero from './Hero';
// import Project from './Project';
import dataProjects from '../data-projects';
import { FormattedDate  } from 'react-intl';
// import { getFunName } from '../helpers';

class App extends React.Component {

  constructor(){
    super();
    this.currentYear = this.currentYear.bind(this);
    this.loadProjects = this.loadProjects.bind(this);
    this.state= {
      projects: dataProjects
    }
  }

  loadProjects() {
    this.setState({
      projects: dataProjects
    });
  }

  currentYear() {
    return (
      <FormattedDate
          value={new Date()}
          year="numeric" />
    )
  }

  render() {

    return (

      <div className="App">
        {/* <button onClick={ this.loadProjects }>Load projects</button> */}

        <Hero title={'Sally Northmore'} subtitle={'Front End Web Developer'} image={'image.jpg'} />

        <ul className="list">
            {
              Object
                .keys(this.state.projects)
                .map(key => <li key={key} >
                    <h2 className="title">
                      {this.state.projects[key].title} <small>({this.state.projects[key].slug})</small>
                    </h2>
                    <a href={`project/:${this.state.projects[key].slug}`}>
                      Go to project
                    </a>
                  </li>)
            }
        </ul>

        <footer>
          <p>&copy; { this.currentYear() } Sally Northmore</p>
          <p>Contact me via <a href="#">LinkedIn</a></p>
          <p>Here's my source code on <a href="#">Github</a></p>
        </footer>

      </div>
    )
  }
}

export default App;
