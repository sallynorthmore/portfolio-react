import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import dataProjects from '../data-projects';
import dataGeneral from '../data-general';
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
      general: dataGeneral,
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
    const selectedProject = this.state.projects[key];

    this.setState({
      currProject: selectedProject,
      active: true
    });
  }

  hideProject() {
    this.setState({
      currProject: {},
      active: false
    });
  }

  render() {
    const title = this.state.general.title;
    const subtitle = this.state.general.subtitle;
    const summary = this.state.general.summary;
    const viewerActive = this.state.active;
    const projectDetails = this.state.currProject ? this.state.currProject : null;

    return (

      <div className={viewerActive ? styles.rootHasViewer : styles.root }>

        <div className={styles.body}>
          <header className={styles.header}>
            <div className={styles.inner}>
              <h1 className={styles.title}>
                {title}
              </h1>
              <p className={styles.subtitle}>
                {subtitle}
              </p>
            </div>
          </header>

          <section className={styles.summary}>
            <p>{summary}</p>

            <h3>Awards</h3>
            <p><strong>Developer Award</strong>, YunoJuno Freelancer Award 2016</p>
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
        <div className={viewerActive ? styles.viewerActive : styles.viewer }>
            <button
              onClick={() => this.hideProject() } className={viewerActive ? styles.button : null}
            ></button>
            <Viewer details={projectDetails}  />
        </div>

      </div>
    )
  }
}

export default App;
