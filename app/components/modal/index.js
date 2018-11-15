import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import "./modal.scss";

import { closeModal, Types } from "@actions/modal";

const {  DETAILS_POPUP_TYPE, EDIT_POPUP_TYPE, DELETE_POPUP_TYPE } = Types;

import DetailsPopup from "./popup/details";
import EditPopup from "./popup/edit";
import DeletePopup from "./popup/delete";

class Modal extends Component {

    renderPopup() {
        let { type, movieId } = this.props;
        let popup = null;

        switch (type) {
            case DETAILS_POPUP_TYPE:
                popup = (<DetailsPopup movieId={movieId} />);
                break;

            case EDIT_POPUP_TYPE:
                popup = (<EditPopup movieId={movieId} />);
                break;

            case DELETE_POPUP_TYPE:
                popup = (<DeletePopup movieId={movieId} />);
                break;
        }

        return popup;
    }

    render() {
        let { type, closeModal } = this.props;

        return (
            <div className={classnames("modal", { "active": type })} onClick={closeModal}>
                {this.renderPopup()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    let { modal } = state;

    return { ...modal };
}

function mapDispatchToProps(dispatch) {
    return {
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)