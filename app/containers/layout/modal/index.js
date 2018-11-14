import React, { Component} from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import "./modal.scss";

import * as moviesActions from '@actions/movies';

import DetailsPopup from './popup/details';
import EditPopup from './popup/edit';
import DeletePopup from './popup/delete';

class Modal extends Component {


    render() {
        let isModalActive=true;

        return (
        <div className={classnames("modal",{"active":isModalActive})}>
           <EditPopup/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Modal)