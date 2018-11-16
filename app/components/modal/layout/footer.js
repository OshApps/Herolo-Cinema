import React, { Component } from "react";

export default class ModalFooter extends Component {

    render() {
        let { buttons } = this.props;

        return (
            <div className="modal_footer">
                {buttons.map(({ value, click }) => (
                    <button onClick={click} key={value}>{value}</button>
                ))}
            </div>
        );
    }

}