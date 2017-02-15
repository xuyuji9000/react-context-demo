import React from 'react';
import { render } from 'react-dom';

import MessageList from "./components/MessageList";

render(
    <MessageList messages={[{"text":"this is expression"},{"text":"this is expression"}]}></MessageList>,
    document.getElementById('root')
);
