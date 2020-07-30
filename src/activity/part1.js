import React, {Component} from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link, Switch
} from 'react-router-dom';

class ActivityPagePart1 extends Component{
 render(){
 	const slice = this.props.slice;
 	const isLoading = this.props.isLoading;
 	console.log(isLoading);
 	console.log(slice);

   return (
   	<div>
   		<div className="newest">
	   		<div className="newest-photo"></div>
	   		<div className="newest-news">
	   			<div className="newest-date">
	   				<p>Sabtu, 17 Agustus 1945 10.10 WIB</p>
	   			</div>
	   			<div className="newest-title">
	   				<p>Lorem Ipsum dolor si amet Lorem Ipsum dolor si </p>
	   			</div>
	   			<div className="newest-detail">
	   				<p> Ut wisi Lorem ipsum dolor sit amet, 
	   				consectetuer adipiscing elit, sed diam nonummy nibh 
	   				euismod tincidunt ut laoreet dolore magna aliquam erat 
	   				volutpat. Ut wisi </p>
	   			</div>
	   		</div>
   		</div>

   		<div className="news-list">
   		{
   			!isLoading ? slice.map( data => 
	   			<div className="news">
			   		<div className="news-photo" style={{ backgroundImage:`url(${data.thumbnailUrl})` }}></div>
			   		<div className="news-text">
			   			<div className="news-date">
			   				<p>Sabtu, 17 Agustus 1945 10.10 WIB</p>
			   			</div>
			   			<div className="news-title">
			   				<Link to={`activity/${data.id}`}><p>{data.title}</p></Link>
			   			</div>
			   			<div className="news-detail">
			   				<p> Ut wisi Lorem ipsum dolor sit amet, 
			   				consectetuer adipiscing elit, sed diam nonummy nibh 
			   				euismod tincidunt ut laoreet dolore magna aliquam erat 
			   				volutpat. Ut wisi </p>
			   			</div>
			   		</div>
	   			</div>
   			)

			 : (<p>Loading</p>)
   		}

   		</div>

   	</div>
   	)
}
}

export default ActivityPagePart1;






/**
   		<div className="news-list">
   			<div className="news">
		   		<div className="news-photo"></div>
		   		<div className="news-text">
		   			<div className="news-date">
		   				<p>Sabtu, 17 Agustus 1945 10.10 WIB</p>
		   			</div>
		   			<div className="news-title">
		   				<p>Lorem Ipsum dolor si amet Lorem Ipsum dolor si </p>
		   			</div>
		   			<div className="news-detail">
		   				<p> Ut wisi Lorem ipsum dolor sit amet, 
		   				consectetuer adipiscing elit, sed diam nonummy nibh 
		   				euismod tincidunt ut laoreet dolore magna aliquam erat 
		   				volutpat. Ut wisi </p>
		   			</div>
		   		</div>
   			</div>
   			<div className="news">
		   		<div className="news-photo"></div>
		   		<div className="news-text">
		   			<div className="news-date">
		   				<p>Sabtu, 17 Agustus 1945 10.10 WIB</p>
		   			</div>
		   			<div className="news-title">
		   				<p>Lorem Ipsum dolor si amet Lorem Ipsum dolor si </p>
		   			</div>
		   			<div className="news-detail">
		   				<p> Ut wisi Lorem ipsum dolor sit amet, 
		   				consectetuer adipiscing elit, sed diam nonummy nibh 
		   				euismod tincidunt ut laoreet dolore magna aliquam erat 
		   				volutpat. Ut wisi </p>
		   			</div>
		   		</div>
   			</div>
   			<div className="news">
		   		<div className="news-photo"></div>
		   		<div className="news-text">
		   			<div className="news-date">
		   				<p>Sabtu, 17 Agustus 1945 10.10 WIB</p>
		   			</div>
		   			<div className="news-title">
		   				<p>Lorem Ipsum dolor si amet Lorem Ipsum dolor si </p>
		   			</div>
		   			<div className="news-detail">
		   				<p> Ut wisi Lorem ipsum dolor sit amet, 
		   				consectetuer adipiscing elit, sed diam nonummy nibh 
		   				euismod tincidunt ut laoreet dolore magna aliquam erat 
		   				volutpat. Ut wisi </p>
		   			</div>
		   		</div>
   			</div>
   			<div className="news">
		   		<div className="news-photo"></div>
		   		<div className="news-text">
		   			<div className="news-date">
		   				<p>Sabtu, 17 Agustus 1945 10.10 WIB</p>
		   			</div>
		   			<div className="news-title">
		   				<p>Lorem Ipsum dolor si amet Lorem Ipsum dolor si </p>
		   			</div>
		   			<div className="news-detail">
		   				<p> Ut wisi Lorem ipsum dolor sit amet, 
		   				consectetuer adipiscing elit, sed diam nonummy nibh 
		   				euismod tincidunt ut laoreet dolore magna aliquam erat 
		   				volutpat. Ut wisi </p>
		   			</div>
		   		</div>
   			</div>
   		</div>
**/