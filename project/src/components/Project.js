import React from 'react';
import Hero from './Hero';
import styles from "./project.css";

class Project extends React.Component {

  render() {
    const { details, index } = this.props;

    return (
      <div>
        <a href="/" className={styles.top}>Home</a>
      {/* <div id={index}> */}
        <header>
          <Hero title={'Project title'} subtitle={'Client / Agency / Year'} image={'https://i.ytimg.com/vi/6peMnVotrhY/maxresdefault.jpg'} />
        </header>
        <section className={styles.body}>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
          <div>
            www: <a href="#">Visit</a>
          </div>
          <div>
            <p>Tech: Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu</p>
            <p>Tools: Vel, aliquet nec, vulputate eget, arcu</p>
          </div>
        </section>


        {/* <h1>{details.title}</h1>
        <p>{details.client} / <span>{details.agency}</span></p>
          Image: {details.image}
        <p>{details.date}</p>
        <p>{details.desc}</p>
        <p>{details.gallery}</p>
        <p>Tech: {details.tech}</p>
        <p>Tools: {details.tools}</p> */}
        <footer>

        </footer>
      </div>
    )
  }
}

export default Project;
