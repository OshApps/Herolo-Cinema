import React, { Component } from "react";
import { connect } from "react-redux";

import "./movies.scss";

import Movie from "./movie";

const MAX_ITEMS_ROW = 5;

class Movies extends Component {

    render() {
        let { movies } = this.props
        let hiddenMovie = [];

        for (let i = 0; i < MAX_ITEMS_ROW; i++) {
            hiddenMovie.push((
                <div className="movie hidden" key={i}></div>
            ));
        }

        return (
            <div className="movies">

                {movies.map((movie) => (<Movie key={movie.id} movie={movie} />))}
                {hiddenMovie}
            </div>
        );
    }
}

function mapStateToProps(state) {
    let { movies } = state;

    movies = movies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        poster: movie.poster,
    }));

    return { movies };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)