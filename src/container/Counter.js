import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionType from "../actions/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="counter_text">Your score: {this.props.ctr}</div>
          <button onClick={this.props.onIncCounter}>Increase one</button>
          <button onClick={this.props.onDecCounter}>Decrease one</button>
          <button onClick={this.props.onAddFive}>Add five</button>
          <button onClick={this.props.resetCounter}>Reset</button>
        </div>
        <button onClick={this.props.onStoreResult}>Store the results</button>
        <div>
          <ul>
            {this.props.storedResults.map((item) => (
              <li
                key={item.id}
                onCLick={() => this.props.onDeleteResult(item.id)}
              >
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter,
    storedResults: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncCounter: () => dispatch({ type: actionType.INCREMENT }),
    onDecCounter: () => dispatch({ type: actionType.DECREMENT }),
    onAddFive: () => dispatch({ type: actionType.ADD, value: 5 }),
    resetCounter: () => dispatch({ type: actionType.RESET }),
    onStoreResult: () => dispatch({ type: actionType.STORE_RESULT }),
    onDeleteResult: (id) =>
      dispatch({ type: actionType.DELETE_RESULT, item: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
