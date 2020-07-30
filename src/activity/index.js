import React, {Component} from 'react';
import './index.css';
import ActivityPagePart1 from './part1';
import ActivityPaging from './paging';
import axios from 'axios'
import ReactPaginate from 'react-paginate';

class ActivityPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            slice: [],
            perPage: 10,
            currentPage: 0,
            isLoading: true
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {
                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    slice,
                    isLoading : false
                })
            });

    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }



 render(){
 	const {slice} = this.state;
   return (
   	<div className="product">
   		<div className="empty"></div>
         <h2>Our Activity</h2>


         <ActivityPagePart1 slice = {this.state.slice} isLoading = {this.state.isLoading}/>


   	<div>
	    <ReactPaginate
	        previousLabel={"< "}
	        nextLabel={" >"}
	        breakLabel={"..."}
	        breakClassName={"break-me"}
	        pageCount={this.state.pageCount}
	        onPageChange={this.handlePageClick}
	        marginPagesDisplayed={2}
	        pageRangeDisplayed={5}
	        containerClassName={"pagination"}
	        subContainerClassName={"pages pagination"}
	        activeClassName={"active"}/>
   	</div>

   </div>
   )
 } 
}
export default ActivityPage;