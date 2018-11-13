import React, { Component } from 'react';
import classnames from "classnames"

import "./movie.scss"

export default class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = { isMovieNameOverflowing: false };

        this.movieElement = React.createRef();
        this.movieNameElement = React.createRef();

        this.onResize = this.onResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.onResize);

        this.onResize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
    }

    onResize() {
        let isMovieNameOverflowing = false;
        let padding = 20;

        let movieWidth = this.movieElement.current.offsetWidth;
        let textWidth = this.movieNameElement.current.offsetWidth;


        if ((movieWidth - padding) < textWidth) {
            isMovieNameOverflowing = true;
        }

        if (this.state.isMovieNameOverflowing != isMovieNameOverflowing) {
            this.setState({ isMovieNameOverflowing })
        }
    }

    render() {
        let { isMovieNameOverflowing } = this.state;
        let { movie } = this.props

        return (
            <div ref={this.movieElement} className="movie">
                <img src={movie.poster} alt={movie.title} />
                <div className="overlay">
                    <div
                        ref={this.movieNameElement}
                        className={classnames("movie_name", { "scroll_animation": isMovieNameOverflowing })}
                    >
                        {movie.title}
                    </div>
                </div>
            </div>
        );
    }
}