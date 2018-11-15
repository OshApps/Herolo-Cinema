import React, { Component } from "react";
import { connect } from "react-redux";

import { closeModal, openModal, Types } from "@actions/modal";

const { EDIT_POPUP_TYPE, DELETE_POPUP_TYPE } = Types;

import movieHelper from "@utils/movieHelper";

import ModalHeader from "@components/modal/layout/header";
import ModalFooter from "@components/modal/layout/footer";
import Poster from "@components/poster";

import "./details.scss";

class DetailsPopup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: null
        };

        this.onClickEdit = this.onClickEdit.bind(this);
        this.onClickDelete = this.onClickDelete.bind(this);
    }

    componentDidMount() {
        let { movies, movieId } = this.props;
        let movie = null;

        if (!movieId) {
            movie = movieHelper.findMovieById(movies, movieId);
        }

        if (movie) {
            this.setState({ movie });
        }
    }

    onClickEdit() {
        let { changePopup, movieId } = this.props;

        changePopup(EDIT_POPUP_TYPE, movieId);
    }

    onClickDelete() {
        let { changePopup, movieId } = this.props;

        changePopup(DELETE_POPUP_TYPE, movieId);
    }

    renderDetails() {
        let { movie } = this.state;

        return (
            <div className="modal_body">
                <div className="modal_menu">
                    <i className="fas fa-edit" onClick={this.onClickEdit}></i>
                    <i className="fas fa-trash" onClick={this.onClickDelete}></i>
                </div>

                <div className="details_container">
                    <div className="poster">
                        <Poster src={movie.poster} />
                    </div>
                    <div className="details">
                        <div className="movie_title">{movie.title}</div>

                        <div className="details_item">
                            <span>Year:</span>
                            <span className="details_item_data">{movie.year}</span>
                        </div>

                        <div className="details_item">
                            <span>Runtime:</span>
                            <span className="details_item_data">{movie.runtime}</span>
                        </div>

                        <div className="details_item">
                            <span>Genre:</span>
                            <span className="details_item_data">{movie.genre}</span>
                        </div>

                        <div className="details_item">
                            <span>Director:</span>
                            <span className="details_item_data">{movie.director}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderErrorMsg() {

        return (
            <div className="modal_body">
                <div className="message">
                    <span>
                        Movie not found
                    </span>
                </div>
            </div>
        );
    }

    render() {
        let { movie } = this.state;
        let { closeModal } = this.props;
        let hasMovie = (movie != null);

        return (
            <div className="modal_content" onClick={(e) => { e.stopPropagation() }}>

                <ModalHeader title={"Movie Details"} />

                {hasMovie ? this.renderDetails() : this.renderErrorMsg()}

                {!hasMovie &&
                    <ModalFooter buttons={[{ value: "OK", click: closeModal }]} />
                }

            </div>
        );
    }
}

function mapStateToProps(state) {
    let { movies } = state;

    return { movies };
}

function mapDispatchToProps(dispatch) {
    return {
        closeModal: () => dispatch(closeModal()),
        changePopup: (type, movieId) => dispatch(openModal(type, movieId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPopup)