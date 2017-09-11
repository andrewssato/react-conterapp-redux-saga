import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './counter.css';
import { connect } from 'react-redux';
import { add, del } from '../../actions/counter';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    const { listenCounter } = this.props;
    const { emitAdd, emitDel } = this.props;

    return (
      <div className={style.counter}>
        <h3>Counter {listenCounter}</h3>
        <button onClick={emitAdd}>add</button>
        <button onClick={emitDel}>delete</button>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    listenCounter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    emitAdd: () => {
      dispatch(add());
    },

    emitDel: () => {
      dispatch(del());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);

