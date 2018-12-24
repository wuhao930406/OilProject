import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let NUMBER_TRANSLATION = ['日', '一', '二', '三', '四', '五', '六'];

class App extends Component {
    constructor(){
      super();
      let now = new Date().getTime();
      this.state = {
          date:this.timetrans(now),
          day:new Date().getDay(),
          fullscreen:false,
          loaded:false,
          loadeds:false,
          hide:false
      }
    }
    timetrans(key){
        let date = new Date(key);//如果date为13位不需要乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        let m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        let s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y+M+D+h+m+s;
    }
    //时钟
    componentDidMount(){
        let _self = this;
        window.addEventListener('keypress',function(e){
            _self.watchFullScreen()
        });
        setInterval(()=>{
              let now = new Date().getTime();
              this.setState({
                  date:this.timetrans(now),
              })
        },1000)
    }
    //全屏
    fullScreen(){
        let el = document.documentElement;
        let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
        if(typeof rfs != "undefined" && rfs) {
            rfs.call(el);
        };
        return;
    }
    //退出全屏
    exitScreen() {
        let de = document;
        if (de.exitFullscreen) {
            de.exitFullscreen();
        } else if (de.mozCancelFullScreen) {
            de.mozCancelFullScreen();
        } else if (de.webkitCancelFullScreen) {
            de.webkitCancelFullScreen();
        }
    }
    changeScreen(fullscreen){
        if(fullscreen){
           this.exitScreen()
        }else{
           this.fullScreen()
        }
        this.setState({
            fullscreen:!fullscreen
        })
    }
    //监听fullscreenchange事件
    watchFullScreen =()=>{
        let explorer = window.navigator.userAgent.toLowerCase(),_self = this;
        if(explorer.indexOf('chrome')>0){//webkit
            if (document.body.scrollHeight === window.screen.height && document.body.scrollWidth === window.screen.width) {
                this.setState({
                    fullscreen:false
                })
            } else {
                this.setState({
                    fullscreen:true
                })
            }
        }else{//IE 9+  fireFox
            if (window.outerHeight === window.screen.height && window.outerWidth === window.screen.width) {
                this.setState({
                    fullscreen:false
                })
            } else {
                this.setState({
                    fullscreen:true
                })
            }
        }
    }



    render() {
            let {date,day,fullscreen,loaded,loadeds,hide} = this.state;

            return (
              <div className="App">
                  <img
                      style={{width:0,height:0}}
                      src='./assets/images/bac.jpg'
                      onLoad={()=>{

                        setTimeout(()=>{
                            this.setState({
                                loadeds:true
                            },()=>{
                               this.setState({
                                     loaded:true,
                                     hide:true
                               })
                            })
                        },1000)
                      }}
                  />
                  <div className="loadbox" style={{bottom:loadeds?"-100%":0,transition:"all 0.4s",display:hide?"none":"block"}}>
                      <div className='base'>
                          <div className='cube'></div>
                          <div className='cube'></div>
                          <div className='cube'></div>
                          <div className='cube'></div>
                          <div className='cube'></div>
                          <div className='cube'></div>
                          <div className='cube'></div>
                          <div className='cube'></div>
                          <div className='cube'></div>
                      </div>
                      <p className="tisi">加载中...</p>
                  </div>

                  <div className="header">
                      <div class="fog__container">
                          <div class="fog__img fog__img--first"></div>
                          <div class="fog__img fog__img--second"></div>
                      </div>

                      <ul className="icongroup">
                          <li style={{marginLeft:loaded?0:-260,transition:"all 0.4s"}}>
                              <img src="./assets/images/gallery.png" alt=""/>
                          </li>
                          <li className="time" style={{marginRight:loaded?0:-300,transition:"all 0.4s"}}>
                              <img src="./assets/images/time.png" alt=""/>
                              <p>星期{NUMBER_TRANSLATION[day]}  {date}</p>
                          </li>
                      </ul>
                      <div className="logocons" style={{top:loaded?"36%":600}}>
                            <img src="./assets/images/Logo.png" alt=""/>
                      </div>
                  </div>
                  <div className="content">
                      <ul className="mainNav">
                          <a href={window.configs.first.url} target={window.configs.first.target?"_blank":""} className="lia" style={{left:loaded?0:"-33%",top:loaded?0:-153}}>
                              <div className="leftcon">
                                  <img className="f1" src="./assets/images/1a.svg" alt=""/>
                                  <img className="bt" src="./assets/images/123b.svg" alt=""/>
                                  <img className="none" src="./assets/images/icon01.png" alt=""/>
                              </div>
                              <div className="rightext">
                                  <p>
                                      {window.configs.first.name1}<br/>
                                      {window.configs.first.name2}
                                  </p>
                              </div>
                          </a>
                          <a href={window.configs.second.url} target={window.configs.second.target?"_blank":""} className="lib" style={{top:loaded?0:-153}}>
                              <div className="leftcon">
                                  <img className="f1" src="./assets/images/2a.svg" alt=""/>
                                  <img className="bt" src="./assets/images/123b.svg" alt=""/>
                                  <img className="none" src="./assets/images/icon02.png" alt=""/>
                              </div>
                              <div className="rightext">
                                  <p>
                                      {window.configs.second.name1}<br/>
                                      {window.configs.second.name2}
                                  </p>
                              </div>
                          </a>
                          <a href={window.configs.third.url} className="lic" target={window.configs.third.target?"_blank":""} style={{right:loaded?0:"-33%",top:loaded?0:-153}}>
                              <div className="leftcon">
                                  <img className="f1" src="./assets/images/3a.svg" alt=""/>
                                  <img className="bt" src="./assets/images/123b.svg" alt=""/>
                                  <img className="none" src="./assets/images/icon03.png" alt=""/>
                              </div>
                              <div className="rightext">
                                  <p>
                                      {window.configs.third.name1}<br/>
                                      {window.configs.third.name2}
                                  </p>
                              </div>
                          </a>
                          <a href={window.configs.fourth.url} className="lid" target={window.configs.fourth.target?"_blank":""} style={{left:loaded?0:"-33%",bottom:loaded?0:-153}}>
                              <div className="leftcon">
                                  <img className="f1" style={{top:16}} src="./assets/images/4a.svg" alt=""/>
                                  <img className="bt" src="./assets/images/4b.svg" alt=""/>
                                  <img className="none" src="./assets/images/icon04.png" alt=""/>
                              </div>
                              <div className="rightext">
                                  <p>
                                      {window.configs.fourth.name1}<br/>
                                      {window.configs.fourth.name2}
                                  </p>
                              </div>
                          </a>
                          <a href={window.configs.fifth.url} className="lie" target={window.configs.fifth.target?"_blank":""} style={{bottom:loaded?0:-153}}>
                              <div className="leftcon">
                                  <img className="f1" style={{top:16,left:14}} src="./assets/images/5a.svg" alt=""/>
                                  <img className="bt" src="./assets/images/5b.svg" alt=""/>
                                  <img className="none" src="./assets/images/icon05.png" alt=""/>
                              </div>
                              <div className="rightext">
                                  <p>
                                      {window.configs.fifth.name1}<br/>
                                      {window.configs.fifth.name2}
                                  </p>
                              </div>
                          </a>
                          <a href={window.configs.sixth.url} className="lif" target={window.configs.sixth.target?"_blank":""} style={{right:loaded?0:"-33%",bottom:loaded?0:-153}}>
                              <div className="leftcon">
                                  <img className="f1" style={{top:16}} src="./assets/images/6a.svg" alt=""/>
                                  <img className="bt" src="./assets/images/6b.svg" alt=""/>
                                  <img className="none" src="./assets/images/icon06.png" alt=""/>
                              </div>
                              <div className="rightext">
                                  <p>
                                      {window.configs.sixth.name1}<br/>
                                      {window.configs.sixth.name2}
                                  </p>
                              </div>
                          </a>
                      </ul>
                      <div className="bacs" style={{opacity:loaded?1:0,transition:"all 4s"}}>

                      </div>
                      <p className="botbox">
                          <b style={{padding:"0px 10px",backgroundColor:"#fff",marginRight:8}}></b>技术支持：CPECC西南分公司      &nbsp;|&nbsp;      版本V2018.12.22</p>
                      <div className="fullscreen" onClick={()=>{
                          this.changeScreen(fullscreen)
                      }}>
                          <img src={fullscreen?"./assets/images/disfull.svg":"./assets/images/full.svg"} alt=""/>
                          
                      </div>  
                  
                  </div>
              </div>
            );
          }
}

export default App;
