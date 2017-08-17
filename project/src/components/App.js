import React from 'react';
import Hero from './Hero';
import Project from './Project';
import dataProjects from '../data-projects';
import { FormattedDate  } from 'react-intl';

class App extends React.Component {

  constructor(){
    super();
    this.currentYear = this.currentYear.bind(this);
    this.loadProjects = this.loadProjects.bind(this);
    this.state= {
      projects: {
          project2: {
            title: 'KMPG Kosmos',
            image: 'boden.jpg',
            desc: 'Some description text about the Kosmos project',
            client: 'KPMG',
            agency: 'Fathom London',
            tech: 'JavaScript ES6, CSS, CSS & SVG animations',
            tools: 'Angular CLI, SASS',
            date: '2017',
            gallery: 'more images'
          },
          project1: {
            title: 'Boden Styleguide',
            image: 'boden.jpg',
            desc: 'Some description text about the Boden project',
            client: 'Boden',
            agency: 'BBH London',
            tech: 'JavaScript ES6, CSS, CSS & SVG animations',
            tools: 'NPM, Gulp, PatternLab, PostCSS, PHP',
            date: '2017',
            gallery: 'more images'
          }
      }
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
        <button onClick={ this.loadProjects }>Load projects</button>

        <Hero title={'Sally Northmore'} subtitle={'Front End Web Developer'} image={'image.jpg'} />

        <ul className="list">
            {
              Object
                .keys(this.state.projects)
                .map(key => <Project key={key} index={key} details={ this.state.projects[key] } />)
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
