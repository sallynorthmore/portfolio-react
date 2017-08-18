import React from 'react';
import dataProjects from '../data-projects';
import { FormattedDate  } from 'react-intl';
import styles from "./app.css";

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

      <div>
        {/* <button onClick={ this.loadProjects }>Load projects</button> */}

        <header className={styles.header}>
          <div className={styles.inner}>
            <h1 className={styles.title}>
              Sally Northmore
            </h1>
            <div className="subtitle">Web Development</div>
          </div>
        </header>

        <section className={styles.summary}>
          I specialise in building beautiful UIs with carefully crafted CSS architecture. I have experience working across platforms, including React, Angular, Backbone and PHP applications. Recent contracts include BBH, Weiden + Kennedy, Tribal Worldwide, and Stink Studios.
        </section>

        <section className={styles.viewer}>

        </section>

        <section className={styles.work}>
          <h2 className={styles.workTitle}>
            Recent work
          </h2>
          <ul className={styles.items}>
              {
                Object
                  .keys(this.state.projects)
                  .map(key => <li key={key} className={styles.item}>

                      <a className={styles.projectLink} href={`project/:${this.state.projects[key].slug}`} title={this.state.projects[key].slug}>
                      <h2 className={styles.projectTitle}>
                        {this.state.projects[key].title}
                      </h2>
                      <p className={styles.projectMeta}>{this.state.projects[key].client} + {this.state.projects[key].agency}, {this.state.projects[key].date}</p>
                      </a>
                    </li>)
              }
          </ul>
        </section>

        <footer className={styles.footer} >
          <span className={styles.footerItem}>&copy; { this.currentYear() } Sally Northmore</span>
          <span className={styles.footerItem}>Contact me via <a href="https://www.linkedin.com/in/sally-northmore-5568489/" target="_blank">LinkedIn</a> or <a href="https://twitter.com/sally_northmore" target="_blank">Twitter</a><br/></span>
          <span className={styles.footerItem}>Code sample? Here&rsquo;s my <a href="#">source code</a></span>
        </footer>

      </div>
    )
  }
}

export default App;
