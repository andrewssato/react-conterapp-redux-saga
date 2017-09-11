import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';

class Header extends Component {
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
      <header className={styles.base}>
       { children }
      </header>
    );
  }
}

export default Header;
