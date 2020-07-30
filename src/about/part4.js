import React, {Component} from 'react';
import './index.css'

class AboutPagePart4 extends Component{
 render(){
   return (
     <div id="about-part4">
      <h3 className="part-title" id="customer"><span className="desktop-display-only">Our Company's </span>Customers</h3>
      <p className="copy" id="vision-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum semper congue libero, at hendrerit felis venenatis aliquet. 
      </p>
      <div className="customer-logos">
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
        <div className="customer-logo"></div>
      </div>
    </div>
  )
 } 
}
export default AboutPagePart4;