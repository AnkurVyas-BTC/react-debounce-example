import React, { Component } from 'react';
import WithDebounceCalculator from './WithDebounceCalculator';

class WithDebounce extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      inputVal: ''
    }
  }

  onChange = (e) => {
    this.setState({ inputVal: e.target.value });
  }

  render() {
    return (
      <div style={{ paddingTop: 100 }}>
        <h3>With Debounce</h3>
        <input type='text' onChange={this.onChange} value={this.state.inputVal} />
        <br />
        <br />
        <WithDebounceCalculator inputVal={this.state.inputVal} />
      </div>
    )
  }
}

export default WithDebounce;