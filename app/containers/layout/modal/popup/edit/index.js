import React, { Component} from 'react';
import { connect } from 'react-redux';

import "./edit.scss";

import * as moviesActions from '@actions/movies';

class EditPopup extends Component {


    render() {

        return (
        <div className="modal_content">
            <div className="modal_header">
                <span className="title">Edit Movie</span>
                <i class="close fas fa-times"></i>
             </div>

             <div className="modal_body">
                <div className="form">
                    <div className="form_group error">
                        <label for="title">Title</label>
                        <input type="text" id="title" placeholder="Title"/>
                        <span className="error_msg">This field is required.</span>
                    </div>
                    <div className="form_group">
                        <label for="year">Year</label>
                        <input type="text" id="year" placeholder="Year"/>
                        <span className="error_msg">This field is required.</span>
                    </div>
                    <div className="form_group">
                        <label for="runtime">Runtime</label>
                        <input type="text" id="runtime" placeholder="Runtime"/>
                        <span className="error_msg">This field is required.</span>
                    </div>
                    <div className="form_group">
                        <label for="genre">Genre</label>
                        <input type="text" id="genre" placeholder="Genre"/>
                        <span className="error_msg">This field is required.</span>
                    </div>
                    <div className="form_group">
                        <label for="director">Director</label>
                        <input type="text" id="director" placeholder="Director"/>
                        <span className="error_msg">This field is required.</span>
                    </div>
                    <div className="form_group">
                        <label for="poster">Poster</label>
                        <input type="text" id="poster" placeholder="Poster URL"/>
                        <span className="error_msg">This field is required.</span>
                    </div>
                </div>
             </div>

             <div className="modal_footer">
                <button>Cancel</button>
                <button>Save</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditPopup)