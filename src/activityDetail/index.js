import React, {Component} from 'react';
import './index.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

class ActivityDetailPage extends Component{
 render(){
 	var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
   return (
   	<div className="activity-detail">
   		<div className="empty"></div>
   		<div className="activity-body">
   			<div className="activity-body-main">
   				<div>
			        <h3 id= "part-title">Our <span>Activities</span></h3>
			        <h2 id= "title">Lorem ipsum dolor sit amet, 
			         consectetur adipiscing elit. Morbi dignissim semper quam, 
			         quis commodo tellus sodales non</h2>
			        <p id="activity-date">Sabtu, 17 Agustus 1945 10.10 WIB</p>

			        <p id="activity-text">
			        	Ut posuere nibh ac sem condimentum, at suscipit nunc rutrum. 
			        	Nullam lacus ligula, sodales vel faucibus nec, tempus et neque. 
			        	Nunc rutrum purus ut tellus ultrices, quis mattis lectus tincidunt. 
			        	Etiam cursus tortor sed diam tincidunt, sed consectetur dui porttitor. 
			        	Duis porttitor elit in mattis sagittis. Integer tempus orci tempor nisl posuere, 
			        	et pharetra est aliquam. Cras porttitor eros in laoreet congue. 
			        	Vestibulum nec dapibus turpis. Integer aliquam nibh risus, 
			        	vitae gravida dui tempor sed. Donec ultrices est blandit ultrices dictum.
			        </p>

      <Slider {...settings}>
        <div>
        	<img src='https://picsum.photos/id/1018/1000/600/'></img>
        </div>
        <div>
        	<img src='https://picsum.photos/id/1015/1000/600/'></img>
        </div>
        <div>
        	<img src='https://picsum.photos/id/1019/1000/600/'></img>
        </div>
      </Slider>

		         </div>
   				<div className="recent-news"></div>
	         </div>
	         <div className="activity-body-sidebar">
	         	<p>&nbsp;</p>
	         </div>
         </div>
   </div>
   )
 } 
}
export default ActivityDetailPage;