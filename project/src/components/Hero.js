import React from 'react';
import styles from "./hero.css";

class Hero extends React.Component {

  render() {
    const backgroundImage = this.props.image ? this.props.image : null;
    const divStyle = { backgroundImage: 'url(' + backgroundImage + ')' };
    const heroClass = this.props.theme ? styles.white : styles.inner;
    let backgroundEl = null;
    let subtitle = this.props.subtitle ? this.props.subtitle : null;

    if ( subtitle ) {
      subtitle = <p className={styles.subtitle}> {this.props.subtitle} </p>
    }

    if (backgroundImage != null) {
      backgroundEl = <div className={styles.background} style={divStyle}></div>
    } else {
      backgroundEl = <div className={styles.spacer}></div>
    }

    return (
      <div className={heroClass}>
        { backgroundEl }
        <div className={styles.body}>
          <h1 className={styles.title}>
            {this.props.title}
          </h1>
          { subtitle }
        </div>
      </div>
    )
  }
}

export default Hero;
