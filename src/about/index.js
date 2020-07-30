import React, {Component} from 'react';
import './index.css';
import AboutPagePart1 from './part1';
import AboutPagePart2 from './part2';
import AboutPagePart3 from './part3';
import AboutPagePart4 from './part4';

class AboutPage extends Component{
 render(){
   return (
   	<div className="about">
   		<AboutPagePart1 />
   		<AboutPagePart2 />
   		<AboutPagePart3 />
   		<AboutPagePart4 />
   </div>
   )
 } 
}
export default AboutPage;