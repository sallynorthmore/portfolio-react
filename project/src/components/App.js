import React from 'react';
import dataProjects from '../data-projects';
import styles from "./app.css";
import Footer from './Footer';
import Item from './Item';
import Viewer from './Viewer';

class App extends React.Component {

  constructor(){
    super();
    this.loadProjects = this.loadProjects.bind(this);
    this.showProject = this.showProject.bind(this);
    this.state= {
      projects: dataProjects,
      currProject: {}
    }
  }

  loadProjects() {
    this.setState({
      projects: dataProjects
    });
  }

  showProject(key) {
    // event.preventDefault();
    console.log(key);
    // copy state
    // const currProject = {...this.state.currProject};

    // currProject[key] = selectedProject;

    const selectedProject = this.state.projects[key];
    // console.log();
    // this.setState({ currProject });

    this.setState({
      currProject: selectedProject
    });

    // update state

  }

  render() {
    // console.log(this.state.currProject.title);

    return (

      <div>
        {/* <button onClick={ this.loadProjects }>Load projects</button> */}

        <header className={styles.header}>
          <div className={styles.inner}>
            <h1 className={styles.title}>
              Sally Northmore
            </h1>
            {/* <div className="subtitle">Web Development</div> */}
          </div>
        </header>

        <section className={styles.summary}>
          I specialise in building beautiful UIs with carefully crafted CSS architecture. I have experience working across platforms, including React, Angular, Backbone and PHP applications. Recent contracts include BBH, Weiden + Kennedy, Tribal Worldwide, and Stink Studios.
        </section>

        <section className={styles.viewer}>
          <Viewer details={this.state.currProject} />
        </section>

        <section className={styles.work}>
          <h2 className={styles.workTitle}>
            Recent work
          </h2>
          <ul className={styles.items}>
            {
              Object
                .keys(this.state.projects)
                .map(key => <Item key={key} index={key} details={this.state.projects[key]}
                showProject={this.showProject}
                />
                )
            }
          </ul>
        </section>

        <Footer />

      </div>
    )
  }
}

export default App;
