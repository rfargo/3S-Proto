import React, {Component} from 'react';
import './index.css'

class AboutPagePart1 extends Component{
 render(){
   return (
    <div id="about-part1">
      <div id="about-part1-image">
        <div className="empty"></div>
        <div className="jumbo-image"></div>
      </div>
      <div id="about-part1-word">
        <div className="empty desktop-only"></div>
        <h2>About Us</h2>
        <p className="copy" id="about-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum semper congue libero, at hendrerit felis venenatis aliquet. 
        Integer tristique enim sit amet consectetur elementum. Sed vel convallis magna. 
        Curabitur nec venenatis tellus, in elementum mi. Morbi dictum, quam non 
        sollicitudin ullamcorper, nunc leo auctor mi, id sodales elit est in mi. 
        Integer eget ex semper, sagittis sem id, scelerisque odio. Nulla iaculis 
        ex ac sapien rhoncus, at fermentum ex vehicula. Suspendisse hendrerit tincidunt 
        tellus, ac efficitur tortor egestas vitae. Vestibulum tempus semper mollis. 
        Curabitur blandit efficitur risus, vel commodo sapien elementum et. Praesent cursus, 
        sem a blandit commodo, dui libero sodales mauris, rutrum scelerisque diam tortor 
        ac ligula. Nunc venenatis, est vel condimentum mollis, nibh enim consectetur purus,
         a rutrum nibh lacus id magna. Orci varius natoque penatibus et magnis dis 
         parturient montes, nascetur ridiculus mus. Aenean vel malesuada augue, 
         sit amet hendrerit lectus. Fusce vitae nisl vel tortor aliquet ornare et a eros. 
         Etiam non laoreet orci.</p>
      </div>
    </div>
  )
 } 
}
export default AboutPagePart1;