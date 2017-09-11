import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

class Content extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <article className={styles.base}>
       { children }
      </article>
    );
  }
}

export default Content;
