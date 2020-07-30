import React, {Component} from 'react';
import './index.css'

class HomePagePart2 extends Component{
 render(){
   return (
     <div className='container' id="part2">
     	<div>
     		<div className="part2-words">
	     		<h2>P.T. Sumber Selamat <br className="mobile-only"/>Selalu is ...</h2>
				<p> 
				consectetuer adipiscing elit, sed diam nonummy nibh euismod 
				tincidunt ut laoreet dolore magna aliquam erat volutpat. 
				Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper 
				suscipit lobortis nisl ut aliquip ex ea commodo consequat.
				 consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
				 laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
				  quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip 
				  ex ea commodo consequat.
				</p>
				<a href="#" class="button" id="more-about">More About Us</a>
			</div>
			<div className="part2-image"></div>
     	</div>
    </div>
  )
 } 
}
export default HomePagePart2;