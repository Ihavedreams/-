import React, { Component } from 'react';

export default class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.count !== prevState.count) {
      return {
        count: nextProps.count
      };
    }
    return null;
  }

  handleC(text) {
    // console.log(text);
    this.props.pfn(text);
  }

  render() {
    return (
      <div style={{border: 'solid 1px #ccc', margin: '0 20px'}}>
        这是子组件
        {this.state.count}
        <button style={{width:'200px', height:'100px'}} onClick={this.handleC.bind(this, 2)}>点击向父组件传递</button>
      </div>
    );
  }
}
