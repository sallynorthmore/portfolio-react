import React from 'react';
import Hero from './Hero';
import styles from "./viewer.css";

class Viewer extends React.Component {

  render() {
    const { details } = this.props;
    const meta = details.agency || details.client ? `${details.client} + ${details.agency}, ${details.date}` : null;
    const subtitle = meta ? meta : false;

    return (
      <div className={styles.root}>
        <header className={styles.header}>
          <Hero title={details.title} subtitle={subtitle} image={details.image} />
        </header>

        <section className={styles.content}>
          <p>
            { details.desc }
          </p>

          <div className={styles.meta}>
            <h3>Tech:</h3> { details.tech }<br/>
            <h3>Tools:</h3> { details.tools }
          </div>

          <a href={`http://${details.site}`} target="_blank" title={`Visit ${details.title}`} className={styles.link}>{ details.site }</a>
        </section>
      </div>
    )
  }
}

export default Viewer;
