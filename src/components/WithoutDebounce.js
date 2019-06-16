import React, { Component } from 'react';
import Calculator from './Calculator';

class WithoutDebounce extends Component {

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
        <h3>Without Debounce</h3>
        <input type='text' onChange={this.onChange} value={this.state.inputVal} />
        <br />
        <br />
        <Calculator inputVal={this.state.inputVal} />
      </div>
    )
  }
}

export default WithoutDebounce;