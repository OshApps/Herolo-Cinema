import React, { Component } from "react";
import { connect } from "react-redux";

import { closeModal } from "@actions/modal";

class ModalHeader extends Component {

    render() {
        let { title, closeModal } = this.props;

        return (
            <div className="modal_header">
                <span className="title">{title}</span>
                <span className="close" onClick={closeModal}>&times;</span>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalHeader)