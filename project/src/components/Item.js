import React from 'react';
import styles from "./item.css";

class Item extends React.Component {

  render() {
    const { details, index } = this.props;
    // const { details } = this.props;

    return (
      <li className={styles.item}>
        <h2 className={styles.projectTitle}>
          {details.title}
        </h2>
        <p className={styles.projectMeta}>{details.client} + {details.agency}, {details.date}</p>
        <button className={styles.projectLink} onClick={() => this.props.showProject(index)} >View</button>
        {/* <button onClick={() => this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button> */}
      </li>
    )
  }
}

Item.propTypes = {
  details: React.PropTypes.object.isRequired,
  index: React.PropTypes.string.isRequired,
};

export default Item;
