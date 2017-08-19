import React from 'react';
import styles from "./item.css";

class Item extends React.Component {

  render() {
    const { details, index } = this.props;
    // const { details } = this.props;

    return (
      <li className={styles.item} onClick={() => this.props.showProject(index)} >
        <h2 className={styles.projectTitle}>
          {details.title}
        </h2>
        <p className={styles.projectMeta}>{details.client} + {details.agency}, {details.date}</p>
        {/* <button className={styles.projectLink} >View</button> */}
      </li>
    )
  }
}

Item.propTypes = {
  details: React.PropTypes.object.isRequired,
  index: React.PropTypes.string.isRequired,
};

export default Item;
