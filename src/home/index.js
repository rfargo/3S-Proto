import React, {Component} from 'react';
import './index.css'
import HomePagePart1 from './part1';
import HomePagePart2 from './part2';
import HomePagePart3 from './part3';
import HomePagePart4 from './part4';
import axios from 'axios'
import ReactPaginate from 'react-paginate';

class HomePage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        };
    }

	receivedData() {
	    axios
	        .get(`http://localhost:8000/api/dummy`)
	        .then(res => {
	            const data = res.data.data;
	            console.log(data);
	            this.setState({
	                data
	            })
	        });
	}

    componentDidMount() {
        this.receivedData()
    }

 render(){
    console.log(this.state.data);
   return (
   	<div className="home">
	   	<HomePagePart1 />
	   	<HomePagePart2 />
	   	<HomePagePart3 />
	   	<HomePagePart4 />
   </div>
   )
 } 
}
export default HomePage;