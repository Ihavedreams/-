import './index.css';
import React, { Component } from 'react';
import Axios from 'axios';

export default class index extends Component {

  state = {
    data: [],
    error: null,
    success: false // axios请求数据开关 成功=>true 失败=>false
  }

  componentDidMount() {
    const _this = this;
    Axios.get('http://api.cnfuyin.net/api/movie/index?movid=2596&app=fytv&device=android&version=3.0.2')
      .then(res => {
        if(res.status === 200) {
          console.log(res);
          _this.setState({
            data: res.data,
            success: true
          });
        }
      })
      .catch(error => {
        _this.setState({
          error: error
        });
      });
  }

  render() {
    // let urls = this.state.data.urls;
    // console.log(Array.isArray(urls),'1');
    // console.log(Array.isArray(this.state.data.urls),'2');
    // console.log(this.state.data);
    return (
      <div className='index'>
        {
          this.state.success ?
            this.state.data.urls.map((item, index) => {
              return (
                <div key={index}>
                  {item.sort_title}
                </div>
              );
            })
            : null        
        }
      </div>
    );
  }
}
