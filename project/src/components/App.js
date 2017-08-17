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
      projects: {
          project2: {
            slug: 'kosmos',
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
            slug: 'boden',
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

  goToStore(event) {
    event.preventDefault();
    console.log('go to project clicked !');
    // grab text from box
    console.log(event.target.ref);
    // const projectid = this.projectInput.value;
    // console.log(this.projectInput.value);
    // transition from / to /:storeid
    // Use the context setup at the bottom of file
    // this.context.router.transitionTo(`/project/${projectid}`);
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
                .map(key => <li key={key} >
                    <h2 className="title">
                      {this.state.projects[key].title}
                    </h2>
                    {/* <p ref={(input) => {this.projectInput = input}}> */}
                    <p>
                      Slug: {this.state.projects[key].slug}
                    </p>
                    <a href={`project/:${this.state.projects[key].slug}`}>Go to project</a>
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

// You have to use context to reference the main router in your component
App.contextTypes = {
  router: React.PropTypes.object
}

export default App;
