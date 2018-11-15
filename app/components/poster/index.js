import React, { Component } from "react";

import { DEFAULT_MOVIE_IMAGE } from "@consts/urls/image";

export default class Poster extends Component {

    render() {
        let { src } = this.props

        return (
            <img src={src} onError={(e) => { e.target.src = DEFAULT_MOVIE_IMAGE }} />
        );
    }

}