import React, { Component } from 'react';
import { connect } from 'react-redux'

import "./movies.scss"

import Movie from "@components/movie"

class Movies extends Component {

    render() {   
        let {movies}=this.props

        return (
        <div className="movies">

            {movies.map( (movie)=>(<Movie key={movie.id} movie={movie}/>))}
            
        </div>
        );
    }
}

function mapStateToProps(state) {
    let {movies} =state

	return {movies}
}

function mapDispatchToProps(dispatch) {
	return {
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)