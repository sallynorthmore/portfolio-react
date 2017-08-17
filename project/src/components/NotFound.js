import React from 'react';
import styles from "./notfound.css";

class NotFound extends React.Component {
  render() {
    // Any where else comment like this
    return (
      <div className={styles.inner}>
        <p>Not Found</p>
      </div>
    )
  }
}

export default NotFound;
