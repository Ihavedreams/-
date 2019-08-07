import React, { Component } from 'react';
import Child from '../children';
export default class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      visible: true,
      value: '请撰写一面你喜欢的dom文章'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value.toUpperCase()
    });
  }

  handleSubmit(event) {
    alert('提交的名字:'+this.state.value);
    event.preventDefault();
  }

 
  handelClick() {
    console.log(this);
  }

  fn(data) {
    // console.log(data,'data');
    this.setState({
      count: data
    }, () => {
      console.log(this.state.count,'父组件');
    });
  }

  

  render() {
    return (
      <div style={{background:'green'}}>
        {this.state.count}
        父组件
        <Child count={this.state.count} pfn={this.fn.bind(this)}></Child>
        <button onClick={this.handelClick.bind(this)}>点击</button>
        <div className='test1' style={{marginTop:'100px'}}>
          <form onSubmit={this.handleSubmit}>
            <label>
              选择你喜欢的风味:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="grapefruit">葡萄柚</option>
                <option value="lime">酸橙</option>
                <option value="coconut">椰子</option>
                <option value="mango">芒果</option>
              </select>
              文章：
              <textarea value={this.state.value} onChange={this.handleChange.bind(this)}>
              </textarea>
              名字：
              <input type="text" name="ss" onChange={this.handleChange} />
            </label>
            <input type="submit" value="提交" />
          </form>
          {/* 这个表单具有默认的html表单行为，点击提交表单后浏览器到新页面。在react中执行相同的代码，依然有效，但大多数情况下，
          使用js函数也可很方便的处理表单行为，同时还可以访问用户提交的表单信息，实现这种效果的标准方式就是受控组件。 */}
        </div>
      </div>
    );
  }
}
