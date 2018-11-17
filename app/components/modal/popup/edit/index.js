import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import { editMovie, addMovie } from "@actions/movies";
import { closeModal } from "@actions/modal";

import { DEFAULT_MOVIE_IMAGE } from "@consts/urls/image";

import validator from "@utils/validator";
import movieHelper from "@utils/movieHelper";

import "./edit.scss";

import ModalHeader from "@components/modal/layout/header";
import ModalFooter from "@components/modal/layout/footer";

class EditPopup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movie: null,
            errorMsg: {},
            form: {
                title: "",
                year: "",
                runtime: "",
                genre: "",
                director: "",
                poster: ""
            }
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        let { movies, movieId } = this.props;
        let movie = null;

        if (movieId) {
            movie = movieHelper.findMovieById(movies, movieId);
        }

        if (movie) {

            if (movie.poster === DEFAULT_MOVIE_IMAGE) {
                movie.poster = "";
            }

            this.setState({ movie, form: { ...movie } });
        }
    }

    onInputChange(event) {
        let target = event.target;
        let { form } = this.state;

        form[target.id] = target.value;

        this.setState({ form });
    }

    submit(form) {
        let { movie } = this.state;
        let { editMovie, addMovie, closeModal } = this.props;
        let submit = movie ? editMovie : addMovie;

        if (validator.isEmpty(form.poster)) {
            form.poster = DEFAULT_MOVIE_IMAGE;
        }

        submit(form);
        closeModal();
    }

    onSubmit() {
        let { form, movie } = this.state;
        let { movies } = this.props;
        let { messages } = validator;
        let errorMsg = {};

        form.runtime = movieHelper.formatText(form.runtime);
        form.genre = movieHelper.formatText(form.genre);
        form.director = movieHelper.formatText(form.director);

        errorMsg = movieHelper.validateMovieForm(form);

        if (!errorMsg.title) {

            form.title = movieHelper.formatTitle(form.title);

            if ((!movie || movie.title !== form.title) && movieHelper.isMovieTitleExist(movies, form.title)) {
                errorMsg.title = messages.exist("title");
            }
        }

        if (Object.keys(errorMsg).length == 0) {
            this.submit(form);
        }

        this.setState({ errorMsg, form });
    }

    render() {
        let { errorMsg, form, movie } = this.state;
        let { closeModal } = this.props;
        let isEditMode = (movie != null);
        let buttons = [
            { value: "Cancel", click: closeModal, className: "btn" },
            { value: isEditMode ? "Save" : "Add", click: this.onSubmit, className: "btn btn_green" }
        ];

        return (
            <div className="modal_content" onClick={(e) => { e.stopPropagation() }}>

                <ModalHeader title={isEditMode ? "Edit Movie" : "Add Movie"} />

                <div className="modal_body">
                    <form>
                        <div className={classnames("form_group", { "error": errorMsg.title })}>
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                placeholder="Title"
                                value={form.title}
                                onChange={this.onInputChange}
                            />
                            <span className="error_msg">{errorMsg.title}</span>
                        </div>
                        <div className={classnames("form_group", { "error": errorMsg.year })}>
                            <label htmlFor="year">Year</label>
                            <input
                                type="text"
                                id="year"
                                placeholder="Year"
                                value={form.year}
                                onChange={this.onInputChange}
                            />

                            <span className="error_msg">{errorMsg.year}</span>
                        </div>
                        <div className={classnames("form_group", { "error": errorMsg.runtime })}>
                            <label htmlFor="runtime">Runtime</label>
                            <input
                                type="text"
                                id="runtime"
                                placeholder="Runtime"
                                value={form.runtime}
                                onChange={this.onInputChange}
                            />
                            <span className="error_msg">{errorMsg.runtime}</span>
                        </div>
                        <div className={classnames("form_group", { "error": errorMsg.genre })}>
                            <label htmlFor="genre">Genre</label>
                            <input
                                type="text"
                                id="genre"
                                placeholder="Genre"
                                value={form.genre}
                                onChange={this.onInputChange}
                            />
                            <span className="error_msg">{errorMsg.genre}</span>
                        </div>
                        <div className={classnames("form_group", { "error": errorMsg.director })}>
                            <label htmlFor="director">Director</label>
                            <input
                                type="text"
                                id="director"
                                placeholder="Director"
                                value={form.director}
                                onChange={this.onInputChange}
                            />
                            <span className="error_msg">{errorMsg.director}</span>
                        </div>
                        <div className={classnames("form_group", { "error": errorMsg.poster })}>
                            <label htmlFor="poster">Poster</label>
                            <input
                                type="text"
                                id="poster"
                                placeholder="Poster URL"
                                value={form.poster}
                                onChange={this.onInputChange}
                            />
                            <span className="error_msg">{errorMsg.poster}</span>
                        </div>
                    </form>
                </div>

                <ModalFooter buttons={buttons} />
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
        editMovie: (movie) => dispatch(editMovie(movie)),
        addMovie: (movie) => dispatch(addMovie(movie))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPopup)