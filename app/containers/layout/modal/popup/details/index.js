import React, { Component} from 'react';
import { connect } from 'react-redux';

import "./details.scss";

import * as moviesActions from '@actions/movies';

class DetailsPopup extends Component {


    render() {

        return (
        <div className="modal_content">
           <div className="modal_header">
                <span className="title">Movie Details</span>
                <i className="close fas fa-times"></i>
            </div>
            <div className="modal_body">
                <div className="modal_menu">
                    <i className="fas fa-edit"></i>
                    <i className="fas fa-trash"></i>
                </div>

                <div className="details_container">
                    <div className="poster">
                        <img src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg" alt="Iron Man"/>   
                    </div>
                    <div className="details">
                        <div className="movie_title">Movie Name</div>

                        <div className="details_item">
                            <span>Year:</span>
                            <span className="details_item_data">1999</span>
                        </div>

                        <div className="details_item">
                            <span>Runtime:</span>
                            <span className="details_item_data">125 min</span>
                        </div>

                        <div className="details_item">
                            <span>Genre:</span>
                            <span className="details_item_data">Biography, Crime, Drama</span>
                        </div>

                        <div className="details_item">
                            <span>Director:</span>
                            <span className="details_item_data">Sidney Lumet</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    let {} =state;

	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		fetchMovies:()=> dispatch(moviesActions.fetchMovies())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPopup)