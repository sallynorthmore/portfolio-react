import React from 'react';
import styles from "./item.css";

class Item extends React.Component {

  constructor(props) {
        super(props);
        this.addActiveClass= this.addActiveClass.bind(this);
        this.state = {
            active: false,
        };
    }

    addActiveClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

  render() {
    const { details, index } = this.props;
    const elementClassNames = styles.item; //classNames(styles.item);

    return (
      <li className={elementClassNames} onClick={() => this.props.showProject(index)} >
        <h2 className={styles.projectTitle}>
          {details.title}
        </h2>
        <p className={styles.projectMeta}>{details.client} + {details.agency}, {details.date}</p>
      </li>
    )
  }
}

export default Item;
