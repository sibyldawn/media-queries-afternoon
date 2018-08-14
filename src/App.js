import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      showMenu: false,
    }
  }

  render() {
    const { showMenu } = this.state;
    return (
      <div className="app">
        <nav>
          <div className="brand small">Start Bootstrap</div>
          <div className="menu small">
          <button className="menu button" onClick={()=>this.setState({showMenu: !showMenu})}>MENU  
            <img src="https://support.okta.com/help/resource/1501803713000/OktaCommunityGlobal/OktaCommunityGlobal/images/nav-icon.png"/>
          
          </button>
          </div>
        <div className="header-flex">
        <div className="brand-box">
         <div className="brand large">Start Bootstrap</div>
         </div>
         <div className="nav-box">
          <div className="menu large">SERVICES</div>
          <div className="menu large">PORTFOLIO</div>
          <div className="menu large">ABOUT</div>
          <div className="menu large">TEAM</div>
          <div className="menu large">CONTACT</div>
          </div>
        </div>
        </nav>
        <div className={showMenu ? "drawer open": "drawer"}>
              <li>SERVICE</li>
              <br/>
              <li>PORTFOLIO</li>
              <br/>
              <li>ABOUT</li>
              <br/>
              <li>TEAM</li>
              <br/>
              <li>CONTACT</li>
        </div>
        <body>
          <div className="intro-wrap">
          <div className="welcome">Welcome To Our Studio!</div>
          <div className="nice">IT'S NICE TO MEET YOU</div>
          <button className="tell" >TELL ME MORE</button> 
          </div>
        </body>
        
      </div>
    );
  }
}

export default App;
