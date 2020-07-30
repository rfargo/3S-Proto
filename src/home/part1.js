import React, {Component} from 'react';
import './index.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class HomePagePart1 extends Component{
 render(){
   return (
     <div className='container' id="part1">

       <div className='jumbotron'>
         <h1>Lorem Ipsum Dolor Si Amet</h1>
          <p>
          consectetuer adipiscing elit, sed diam nonummy 
          nibh euismod tincidunt ut laoreet dolore magna 
          aliquam erat volutpat. Ut wisi enim ad minim veniam, 
          quis nostrud exerci tation ullamcorper suscipit 
          lobortis nisl ut aliquip ex ea commodo consequat.
		      </p>
    		 <a href="#" class="button" id="contact-us">Contact Us</a>
    		 <a href="#" class="button" id="see-product">See Our Products</a>
       </div>
       <div className="scroll-more">
        <ExpandMoreIcon fontSize="large" style={{color:"white"}}></ExpandMoreIcon>
        <p>    Scroll for more    </p>
        <ExpandMoreIcon fontSize="large" style={{color:"white"}}></ExpandMoreIcon>
       </div>
    </div>
  )
 } 
}
export default HomePagePart1;