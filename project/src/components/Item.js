import React from 'react';
import styles from "./item.css";

class Item extends React.Component {

  // constructor(){
  //   super();
  // }

  render() {
    // const { details, index } = this.props;
    const { details } = this.props;

    return (
      <li className={styles.item}>
        <a className={styles.projectLink} href={`project/:${details.slug}`} title={details.slug}>
        <h2 className={styles.projectTitle}>
          {details.title}
        </h2>
        <p className={styles.projectMeta}>{details.client} + {details.agency}, {details.date}</p>
        </a>
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
