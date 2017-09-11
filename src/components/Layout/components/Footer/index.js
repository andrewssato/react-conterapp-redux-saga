import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

class Footer extends Component {
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
      <footer className={styles.base}>
        { children }
      </footer>
    );
  }
}

export default Footer;
