import React, { Component } from "react";
import Message from "./Message";

class MessageList extends Component
{
    getChildContext() 
    {
        return {
            color: "purple"
        };
    }

    render()
    {
        const color = "purple";
        const children = this.props.messages.map((message, index) => {
            return <Message text={message.text} key={index}></Message>;
        });
        return(
            <div>{children}</div>
        );
    }
}

MessageList.childContextTypes = {
    color: React.PropTypes.string
};

export default MessageList;
