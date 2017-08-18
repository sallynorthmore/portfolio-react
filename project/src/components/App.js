import React from 'react';
import dataProjects from '../data-projects';
import styles from "./app.css";
import Footer from './Footer';
import Item from './Item';

class App extends React.Component {

  constructor(){
    super();
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
                .map(key => <Item key={key} index={key} details={this.state.projects[key]}
                />
                )
            }
              {/* {
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
              } */}
          </ul>
        </section>

        <Footer />

      </div>
    )
  }
}

export default App;
