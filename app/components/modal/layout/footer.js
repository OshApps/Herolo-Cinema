import React, { Component } from "react";

export default class ModalFooter extends Component {

    render() {
        let { buttons } = this.props;

        return (
            <div className="modal_footer">
                {buttons.map((button)=>(
                   <button onClick={button.click}>{button.value}</button> 
                ))}
            </div>
        );
    }

}