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
    this.hideProject = this.hideProject.bind(this);

    this.state= {
      projects: dataProjects,
      currProject: {},
      active: false
    }
  }

  loadProjects() {
    this.setState({
      projects: dataProjects
    });
  }

  showProject(key) {
    console.log(key);
    const selectedProject = this.state.projects[key];

    this.setState({
      currProject: selectedProject,
      active: true
    });
  }

  hideProject() {
    console.log("Closing project")
    this.setState({
      currProject: {},
      active: false
    });
  }

  render() {
    const viewerActive = this.state.active;
    const projectDetails = this.state.currProject ? this.state.currProject : null;

    return (

      <div className={viewerActive ? styles.rootHasViewer : styles.root }>

        <div className={styles.body}>
          <header className={styles.header}>
            <div className={styles.inner}>
              <h1 className={styles.title}>
                Sally Northmore
              </h1>
              <p className={styles.subtitle}>
                Frontend Web developer
              </p>
            </div>
          </header>

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

          <section className={styles.summary}>
            <h2 className={styles.workTitle}>
              About
            </h2>
            I specialise in building beautiful UIs with carefully crafted CSS architecture. I have experience working across platforms, including React, Angular, Backbone and PHP applications. Recent contracts include BBH, Weiden + Kennedy, Tribal Worldwide, and Stink Studios.
          </section>

          <Footer />

        </div>
        <div className={viewerActive ? styles.viewerActive : styles.viewer }>
            <button onClick={() => this.hideProject() } className={styles.button}></button>
            <Viewer details={projectDetails}  />
        </div>

      </div>
    )
  }
}

export default App;
