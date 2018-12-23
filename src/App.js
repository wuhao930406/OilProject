import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="header">
              <ul className="icongroup">
                  <li>
                      <img src="./assets/images/gallery.png" alt=""/>
                  </li>
                  <li className="time">
                      <img src="./assets/images/time.png" alt=""/>
                      <p>星期六  2018-12-24 21:22:50</p>
                  </li>
              </ul>
              <div className="logocons">
                    <img src="./assets/images/Logo.png" alt=""/>
              </div>
          </div>
          <div className="content">
              <ul className="mainNav">
                  <li className="lia">
                      <div className="leftcon">
                          <img src="./assets/images/icon01.png" alt=""/>
                      </div>
                      <div className="rightext">
                          <p>
                              3D设计<br/>
                              数字化模型
                          </p>
                      </div>
                  </li>
                  <li className="lib">
                      <div className="leftcon">
                          <img src="./assets/images/icon02.png" alt=""/>
                      </div>
                      <div className="rightext">
                          <p>
                              3D设计<br/>
                              数字化模型
                          </p>
                      </div>
                  </li>
                  <li className="lic">
                      <div className="leftcon">
                          <img src="./assets/images/icon03.png" alt=""/>
                      </div>
                      <div className="rightext">
                          <p>
                              3D设计<br/>
                              数字化模型
                          </p>
                      </div>
                  </li>
                  <li className="lid">
                      <div className="leftcon">
                          <img src="./assets/images/icon04.png" alt=""/>
                      </div>
                      <div className="rightext">
                          <p>
                              3D设计<br/>
                              数字化模型
                          </p>
                      </div>
                  </li>
                  <li className="lie">
                      <div className="leftcon">
                          <img src="./assets/images/icon05.png" alt=""/>
                      </div>
                      <div className="rightext">
                          <p>
                              3D设计<br/>
                              数字化模型
                          </p>
                      </div>
                  </li>
                  <li className="lif">
                      <div className="leftcon">
                          <img src="./assets/images/icon06.png" alt=""/>
                      </div>
                      <div className="rightext">
                          <p>
                              3D设计<br/>
                              数字化模型
                          </p>
                      </div>
                  </li>
              </ul>
              <div className="bacs">

              </div>
              <p className="botbox">Technical support ：CPECC西南分公司      |      版本V2018.12.22</p>
          </div>
      </div>
    );
  }
}

export default App;
