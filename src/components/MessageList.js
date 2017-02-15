import React, { Component } from "react";
import Message from "./Message";

class MessageList extends Component
{
    render()
    {
        const color = "purple";
        const children = this.props.messages.map(message => {
            return <Message text={message.text} color={color}></Message>;
        });
        return(
            <div>{children}</div>
        );
    }
}

export default MessageList;
