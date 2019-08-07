import './index.css';
import React, { Component } from 'react';
import Video from '../../components/shipin'; // 视频组件
import Yinpin from '../../components/yinpin'; // 音频组件
export default class index extends Component {

  state = {
    function: ['收藏','下载','分享','笔记'],
    tab_title: ['介绍','视频','音频'],
    tab_title_index: 0
  }

  handleClick(index) { // tab切换
    this.setState({
      tab_title_index: index,
      visible: true
    });
  }

  componentDidMount() {
   
  }

  render() {
    let tab_title_index = this.state.tab_title_index;
    return (
      <div className='index'>
        <header className='header'>
          <span>返回</span>
          <span>{'视频名字视频名字视频名字视频名字'}</span>
          <span></span>
        </header>
        <section className='section'>
          {/* 播放区 */}
          <div className='playArea'>

          </div>
          {/* 功能区 */}
          <ul className='function'>
            {
              this.state.function.length>0 && this.state.function.map((item, index) => {
                return (
                  <li className='li' key={index}>{item}</li>
                );
              })
            }
          </ul>
          <div className='tab'>
            <div className='tab_head'>
              {
                this.state.tab_title.length>0 && this.state.tab_title.map((item, index) => {
                  return (
                    <span className={'span'+(tab_title_index === index ? 'active' : null)} key={index} onClick={this.handleClick.bind(this,index)}>
                      {item}
                    </span>
                  );
                })
              }
            </div>
            
            {/* 介绍 */}
            <div className={'content' + (tab_title_index === 0 ? 'active' : '')}>
              0
            </div>
            {/* 视频 */}
            <div className={'content' + (tab_title_index === 1 ? 'active' : '' )}>
              <Video></Video>
            </div>
            {/* 音频 */}
            <div className={'content' + (tab_title_index === 2 ? 'active' : '' )}>
              <Yinpin></Yinpin>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
