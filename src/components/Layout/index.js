import React, { Component} from 'react';
import styles from './style.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.base}>
        <Header> Header </Header>
        <Content> { children  } </Content>
        <Footer> Footer </Footer>
      </div>
    );
  }
}

export default Layout;
