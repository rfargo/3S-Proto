import React, {Component} from 'react';
import './index.css';
import ContactPagePart1 from './part1';

class ContactPage extends Component{
 render(){
   return (
   	<div className="contact">
   		<div className="empty"></div>
   		<h2>Contact Us</h2>
   		<ContactPagePart1 />
   </div>
   )
 } 
}
export default ContactPage;