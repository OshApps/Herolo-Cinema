import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";

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
            this.setState({ movie, form: { ...movie } });
        }
    }

    onInputChange(event) {
        let target = event.target;
        let { form } = this.state;

        form[target.id] = target.value;

        this.setState({ form });
    }

    onSubmit() {
        let { form, movie } = this.state;
        let { title, year, runtime, genre, director, poster } = form;
        let { movies } = this.props;
        let { messages } = validator;

        let errorMsg = {};

        if (validator.isEmpty(title)) {
            errorMsg.title = messages.required;
        } else {
            title = movieHelper.formatTitle(title);

            if (validator.isEmpty(title)) {
                errorMsg.title = messages.invalid("title");
            } else if ((!movie || movie.title !== title) && movieHelper.isMovieTitleExist(movies, title)) {
                form.title = title;
                errorMsg.title = messages.exist("title");
            }
        }

        if (validator.isEmpty(year)) {
            errorMsg.year = messages.required;
        } else if (!validator.isValidYear(year)) {
            errorMsg.year = messages.invalid("year");
        }

        if (validator.isEmpty(runtime)) {
            errorMsg.runtime = messages.required;
        }

        if (validator.isEmpty(genre)) {
            errorMsg.genre = messages.required;
        }

        if (validator.isEmpty(director)) {
            errorMsg.director = messages.required;
        }

        if (!validator.isEmpty(poster) && !validator.isValidURL(poster)) {
            errorMsg.poster = messages.invalid("poster");
        }

        if (Object.keys(errorMsg).length == 0) {
            //TODO submit
        }

        this.setState({ errorMsg, form });
    }

    render() {
        let { errorMsg, form, movie } = this.state;
        let { closeModal } = this.props;
        let isEditMode = (movie != null);
        let buttons = [
            { value: "Cancel", click: closeModal },
            { value: isEditMode ? "Save" : "Add", click: this.onSubmit }
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
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPopup)