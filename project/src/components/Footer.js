import React from 'react';
import { FormattedDate  } from 'react-intl';
import styles from "./footer.css";

class Footer extends React.Component {

  constructor(){
    super();
    this.currentYear = this.currentYear.bind(this);
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
      <footer className={styles.footer} >
        <span className={styles.footerItem}>&copy; { this.currentYear() } Sally Northmore</span>
        <span className={styles.footerItem}>Contact me via <a href="https://www.linkedin.com/in/sally-northmore-5568489/" target="_blank">LinkedIn</a> or <a href="https://twitter.com/sally_northmore" target="_blank">Twitter</a><br/></span>
        <span className={styles.footerItem}>Code sample? Here&rsquo;s my <a href="#">source code</a></span>
      </footer>
    )
  }
}

export default Footer;
