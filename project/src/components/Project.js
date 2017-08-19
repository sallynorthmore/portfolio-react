import React from 'react';
import Hero from './Hero';
import styles from "./project.css";

class Project extends React.Component {

  render() {
    // const { details, index } = this.props;
    // const url = `https://${details.site}`;

    return (
      <div>
        <a href="/" className={styles.top}>Home</a>
      {/* <div id={index}> */}
        <header>
          <Hero title={'Project title'} subtitle={'Client + Agency, Year'} image={'https://i.ytimg.com/vi/6peMnVotrhY/maxresdefault.jpg'} />
        </header>

        <section className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>

          <div className={styles.meta}>
            <h3>Tech:</h3> Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu <br/>
            <h3>Tools:</h3> Vel, aliquet nec, vulputate eget, arcu
          </div>

          <a href="#" className={styles.link}>site.com</a>
        </section>
      </div>
    )
  }
}

export default Project;
