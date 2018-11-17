import React, { Component } from "react";

export default class ModalFooter extends Component {

    render() {
        let { buttons } = this.props;

        return (
            <div className="modal_footer">
                {buttons.map(({ value, click, className = "" }) => (
                    <button onClick={click} key={value} className={className}>{value}</button>
                ))}
            </div>
        );
    }

}