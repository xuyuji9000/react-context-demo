import React, { Component } from "react";

class Button extends Component
{
    render() {
        return (
            <button style={{background: this.context.color}}>
                {this.props.children}
            </button>
        );
    }
}

Button.contextTypes = {
    color: React.PropTypes.string
};

export default Button;
