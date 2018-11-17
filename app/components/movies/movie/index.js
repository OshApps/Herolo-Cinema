import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import { openModal, Types } from "@actions/modal";

const { DETAILS_POPUP_TYPE } = Types;

import Poster from "@components/poster";

import "./movie.scss";

class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = { isMovieTitleOverflowing: false };

        this.movieElement = React.createRef();
        this.movieTitleElement = React.createRef();

        this.onResize = this.onResize.bind(this);
        this.openMovieDetails = this.openMovieDetails.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.onResize);

        this.onResize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.movie.title !== this.props.movie.title) {
            this.onResize();
        }
    }

    openMovieDetails() {
        let { openDetailsPopup, movie } = this.props;

        openDetailsPopup(movie.id);
    }

    onResize() {
        let isMovieTitleOverflowing = false;
        let padding = 20;

        let movieWidth = this.movieElement.current.offsetWidth;
        let textWidth = this.movieTitleElement.current.offsetWidth;


        if ((movieWidth - padding) < textWidth) {
            isMovieTitleOverflowing = true;
        }

        if (this.state.isMovieTitleOverflowing != isMovieTitleOverflowing) {
            this.setState({ isMovieTitleOverflowing });
        }
    }

    render() {
        let { isMovieTitleOverflowing } = this.state;
        let { movie } = this.props;

        return (
            <div ref={this.movieElement} className="movie" onClick={this.openMovieDetails}>

                <Poster src={movie.poster} />

                <div className="overlay">
                    <div ref={this.movieTitleElement} className={classnames("movie_title", { "scroll_animation": isMovieTitleOverflowing })}>
                        {movie.title}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        openDetailsPopup: (movieId) => dispatch(openModal(DETAILS_POPUP_TYPE, movieId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)