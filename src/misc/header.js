import React, {Component} from 'react';
import '../App.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {
  BrowserRouter as Router,
  Route,
  Link, Switch
} from 'react-router-dom';
import MediaQuery from 'react-responsive';

class Header extends Component{

  constructor(props) {
    super(props);
    this.state = {
    	isMenu: false,
    	className: "header"
    };

    // This binding is necessary to make `this` work in the callback
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
  }

  handleCloseMenu() {
    this.setState(state => ({
      isMenu: false
    }));
  }

  handleOpenMenu() {
    this.setState(state => ({
      isMenu: true
    }));
  }

  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
  }
  
  handleScroll=()=>{
    if (window.pageYOffset > 0) {
      this.setState({ className: "header scrolled" });   
    }else{
      this.setState({ className: "header" });
    }
   
  }

 render(){
  console.log(window.location.pathname!="/");
  let LinkHome =(
    <div className="option-div">
      <Link to="/" onClick={this.handleCloseMenu}>
        {
          window.location.pathname=="/" ?
          <p className="option strong">HOME</p>:
          <p className="option">HOME</p>
        }
      </Link>
      <Link to="/about" onClick={this.handleCloseMenu}>
        {
          window.location.pathname=="/about" ?
          <p className="option strong">ABOUT US</p>:
          <p className="option">ABOUT US</p>
        }
      </Link>
      <Link to="/product" onClick={this.handleCloseMenu}>
        {
          window.location.pathname=="/product" ?
          <p className="option strong">PRODUCT</p>:
          <p className="option">PRODUCT</p>
        }
      </Link>
      <Link to="/activity" onClick={this.handleCloseMenu}>
        {
          window.location.pathname=="/activity" ?
          <p className="option strong">ACTIVITIES</p>:
          <p className="option">ACTIVITIES</p>
        }
      </Link>
      <Link to="/contact" onClick={this.handleCloseMenu}>
        {
          window.location.pathname=="/contact" ?
          <p className="option strong">CONTACT US</p>:
          <p className="option">CONTACT US</p>
        }
      </Link>
    </div>
  )

   return (
   	<div>
    <MediaQuery maxDeviceWidth={1199}>
      {this.state.isMenu?
        <div className={this.state.className} id="headerMenu">
          <div className="logo-icon">
            <div id="logo"></div>
            <div id="hamburger">
              <CloseIcon fontSize="large" style={{color:"white"}} onClick={this.handleCloseMenu}>
              </CloseIcon>
            </div>
          </div>
          {LinkHome}
          <div className="empty">
          </div>

        </div>
      :
        window.location.pathname!="/"? 
        <div className="header scrolled" id="headerNoMenu">
          <div class="logo-icon">
            <div id="logo"></div>
            <div id="hamburger">
              <MenuIcon fontSize="large" style={{color:"white"}} onClick={this.handleOpenMenu}>
              </MenuIcon>
            </div>
          </div>
        </div>
        : 
        <div className={this.state.className} id="headerNoMenu">
          <div class="logo-icon">
            <div id="logo"></div>
            <div id="hamburger">
              <MenuIcon fontSize="large" style={{color:"white"}} onClick={this.handleOpenMenu}>
              </MenuIcon>
            </div>
          </div>
        </div>
      }    
    </MediaQuery>

    <MediaQuery minDeviceWidth={1200}>
      {
        window.location.pathname!="/"? 
        <div className="header scrolled" id="headerNoMenu">
          <div class="logo-icon">
            <div id="logo"></div>
            {LinkHome}
          </div>
        </div>
        : 
        <div className={this.state.className} id="headerNoMenu">
          <div class="logo-icon">
            <div id="logo"></div>
            {LinkHome}
          </div>
        </div>
      }
    </MediaQuery>

    </div>
     )
 } 
}
export default Header;

/*
          <div className="option-div">
            <p className="option">HOME</p>
            <p className="option">ABOUT US</p>
            <p className="option">PRODUCT</p>
            <p className="option">ACTIVITIES</p>
            <p className="option">CONTACT US</p>
          </div>

          <div>

          </div>
*/