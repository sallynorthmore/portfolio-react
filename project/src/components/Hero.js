import React from 'react';
import styles from "./hero.css";

class Hero extends React.Component {

  render() {
    const backgroundImage = this.props.image ? this.props.image : '';
    const divStyle = { backgroundImage: 'url(' + backgroundImage + ')' };
    const heroClass = this.props.theme ? styles.white : styles.inner;
    return (
      <div className={heroClass}>
        <div className={styles.background} style={divStyle}></div>
        <div className={styles.body}>
          <h1 className={styles.title}>
            {this.props.title}
          </h1>
          <p className={styles.subtitle}>
            {this.props.subtitle}
          </p>
        </div>
      </div>
    )
  }
}

export default Hero;
