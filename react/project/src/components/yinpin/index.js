import './index.css';
import React, { Component } from 'react';
import Request from '../../utils/request';

export default class index extends Component {
  
  componentDidMount() {
    this.qingqiu();
  }

  qingqiu(){
    console.log(1);
    Request('http://api.cnfuyin.net/api/movie/index?movid=2596&app=fytv&device=android&version=3.0.2').then((req) => {
      console.log(req);
    });
   
  }
  
  render() {
    return (
      <div className='index'>
          音频页面
      </div>
    );
  }
}
