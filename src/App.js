import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="header">
              <ul className="icongroup">
                  <li>icona</li>
                  <li>iconb</li>
              </ul>
              <div className="logocons">
                    <p>
                        Logos
                    </p>
              </div>
          </div>
          <div className="content">
              <ul className="mainNav">
                  <li className="lia">section</li>
                  <li className="lib">section</li>
                  <li className="lic">section</li>
                  <li className="lid">section</li>
                  <li className="lie">section</li>
                  <li className="lif">section</li>
              </ul>
              <div className="bacs">

              </div>
              <p class="botbox">Technical support ：CPECC西南分公司      |      版本V2018.12.22</p>
          </div>
      </div>
    );
  }
}

export default App;
