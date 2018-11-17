import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteMovie } from "@actions/movies";
import { closeModal } from "@actions/modal";

import movieHelper from "@utils/movieHelper";

import "./delete.scss";

import ModalHeader from "@components/modal/layout/header";
import ModalFooter from "@components/modal/layout/footer";

class DeletePopup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movie: null
        };

        this.onClickDelete = this.onClickDelete.bind(this);
    }

    componentDidMount() {
        let { movies, movieId } = this.props;
        let movie = null;

        if (movieId) {
            movie = movieHelper.findMovieById(movies, movieId);
        }

        if (movie) {
            this.setState({ movie });
        }
    }

    onClickDelete() {
        let { closeModal, deleteMovie, movieId } = this.props;

        closeModal();
        deleteMovie(movieId);
    }

    renderDeleteMsg() {
        let { movie } = this.state;

        return (
            <span>
                Are you sure you want to delete
                <span className="message_movie_title">{movie.title}</span>
                ?
            </span>
        );
    }

    renderErrorMsg() {

        return (
            <span>
                Movie not found
            </span>
        );
    }

    render() {
        let { movie } = this.state;
        let { closeModal } = this.props;
        let hasMovie = (movie != null);
        let buttons = [{
            value: hasMovie ? "Cancel" : "OK",
            click: closeModal,
            className: "btn"
        }];

        if (hasMovie) {
            buttons.push({
                value: "Delete",
                click: this.onClickDelete,
                className: "btn btn_red"
            });
        }

        return (
            <div className="modal_content" onClick={(e) => { e.stopPropagation() }}>

                <ModalHeader title={"Delete Movie"} />

                <div className="modal_body">

                    <div className="message">
                        {hasMovie ? this.renderDeleteMsg() : this.renderErrorMsg()}
                    </div>
                </div>

                <ModalFooter buttons={buttons} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    let { movies } = state;

    movies = movies.map((movie) => ({
        id: movie.id,
        title: movie.title
    }));

    return { movies };
}

function mapDispatchToProps(dispatch) {
    return {
        closeModal: () => dispatch(closeModal()),
        deleteMovie: (id) => dispatch(deleteMovie(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeletePopup)