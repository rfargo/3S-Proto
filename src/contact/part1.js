import React, {Component} from 'react';
import './index.css';
import PhoneIcon from '@material-ui/icons/Phone';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import MailIcon from '@material-ui/icons/Mail';

class ContactPagePart1 extends Component{
 render(){
   return (
   <div>
      <div className="contact-part0">
   		<div className="contact-part1">
   			<div className="contact-via" id="address">
   				<div className="via-sign" id="address-sign"></div>
   				<div className="via-write" id="address-write">
   					<p>Jl Pasir Mulya 1C, Bogor 16118 (1st Office)</p>
   					<p>Jl Sajim 19, Gandaria Utara, Kebayoran Baru, Jakarta Selatan 12140 (2nd Office)</p>
   					<p>Jl Ahmad Yani Km.6, Kotawaringin Barat, Kalimantan Tengah 74112 (3rd Office)</p>
   				</div>
   			</div>
   			<div className="contact-via" id="phone">
   				<div className="via-sign" id="phone-sign">
                  <PhoneIcon fontSize="large" style={{color:"red"}}></PhoneIcon>
               </div>
   				<div className="via-write" id="phone-write">
   					<p>(021) 29-222-835</p>
   				</div>
   			</div>
   			<div className="contact-via" id="fax">
   				<div className="via-sign" id="fax-sign"></div>
   				<div className="via-write" id="fax-write">
   					<p>(021) 2972-1563</p>
   				</div>
   			</div>
   			<div className="contact-via" id="mobile">
   				<div className="via-sign" id="mobile-sign">
                  <SmartphoneIcon fontSize="large" style={{color:"red"}}></SmartphoneIcon>
               </div>
   				<div className="via-write" id="mobile-write">
   					<p>081-180-1008</p>
   					<p>0813-8080-3267</p>
   				</div>
   			</div>
   			<div className="contact-via" id="email">
   				<div className="via-sign" id="email-sign">
                  <MailIcon fontSize="large" style={{color:"red"}}></MailIcon>
               </div>
   				<div className="via-write" id="email-write">
   					<p>cs@sumberselamatselalu.id</p>
   					<p>sales@sumberselamatselalu.com</p>
   				</div>
   			</div>
   		</div>

         <div className="contact-part2">
            <h4>Business Hours</h4>
            <div className="table">
               <div className="business-hours" id="head">
                  <div className="column-left"><p>Days</p></div>
                  <div className="column-right"><p>Hours</p></div>
               </div>
               <div className="business-hours days" id="cell">
                  <div className="column-left"><p>Monday - Friday</p></div>
                  <div className="column-right"><p>08.00 WIB - 17.00 WIB</p></div>
               </div>
               <div className="business-hours days" id="cell">
                  <div className="column-left"><p>Saturday - Sunday</p></div>
                  <div className="column-right"><p>Closed</p></div>
               </div>
            </div>
         </div>
      </div>
      <div className="contact-part3">
         <h4>Leave Us a Message</h4>
         <form>
            <input type="text" 
            id="input-name" 
            name="name" 
            className="input-form" 
            placeholder="Your Name"></input>

            <input type="text" 
            id="input-email" 
            name="email" 
            className="input-form" 
            placeholder="Your Email"></input>

            <textarea placeholder="Message" 
            className="input-form"
            id="input-text" ></textarea>

            <div className="send-button">
            <a href="#" class="button">Send</a>
            </div>
         </form>
      </div>
   </div>
   )
 } 
}
export default ContactPagePart1;