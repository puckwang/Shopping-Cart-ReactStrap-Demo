import React from 'react';
import './a.css';

export default class Hello extends React.Component {
  state = {
    count: 1,
  };

  addCount = () => {
    this.setState({
      count: this.state.count += 1,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h1 style={{color: 'red'}} onClick={() => {
          alert('Hello');
        }}> Hello! </h1>
        <button onClick={this.addCount}>按鈕</button>
      </div>
    );
  }
}
