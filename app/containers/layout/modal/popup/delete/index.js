import React, { Component} from 'react';
import { connect } from 'react-redux';

import "./delete.scss";

import * as moviesActions from '@actions/movies';

class DeletePopup extends Component {


    render() {
        return (
        <div className="modal_content">
            <div className="modal_header">
                <span className="title">Delete Movie</span>
                <i class="close fas fa-times"></i>
            </div>
            <div className="modal_body">

                <div className="message">
                    <span >
                        Are you sure you want to delete  
                        <span className="message_movie_title">Movie Title</span> 
                        ?
                    </span>
                </div>
            </div>

            <div className="modal_footer">
                <button>Cancel</button>
                <button>Delete</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DeletePopup)