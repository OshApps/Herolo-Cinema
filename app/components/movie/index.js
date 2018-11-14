import React, { Component } from 'react';
import classnames from "classnames";

import "./movie.scss";

export default class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = { isMovieTitleOverflowing: false };

        this.movieElement = React.createRef();
        this.movieTitleElement = React.createRef();

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
            <div ref={this.movieElement} className="movie">
                <img src={movie.poster} alt={movie.title} />
                <div className="overlay">
                    <div
                        ref={this.movieTitleElement}
                        className={classnames("movie_title", { "scroll_animation": isMovieTitleOverflowing })}
                    >
                        {movie.title}
                    </div>
                </div>
            </div>
        );
    }
}