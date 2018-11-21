import React, { Component } from "react";
import { connect } from "react-redux";

import { openModal, Types } from "@actions/modal";

const { EDIT_POPUP_TYPE } = Types;

class Menu extends Component {

    render() {
        let { openEditPopup } = this.props;

        return (
            <div className="menu">
                <button className="btn btn_green" onClick={openEditPopup}>Add New Movie</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        openEditPopup: () => dispatch(openModal(EDIT_POPUP_TYPE))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)