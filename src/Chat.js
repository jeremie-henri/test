import React, { Component } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import UserStore from "./stores/UserStore";

//const URL = "ws://www.jeremie-henri-test.glitch.me:8080";
const URL = "wss://connect.websocket.in/v3/1?apiKey=lG1bTjO8s09k4ZIRohyIh9flldycsPTD7I4eQuD1CQdIFc3EHlMtuQnPhuX6";

class Chat extends Component {
    state = {
        name: UserStore.username,
        messages: [],
    };

    ws = new WebSocket(URL);

    componentDidMount() {
        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        };

        this.ws.onmessage = evt => {
            // on receiving a message, add it to the list of messages
            const message = JSON.parse(evt.data);
            this.addMessage(message)
        };

        this.ws.onclose = () => {
            console.log('disconnected');
            // automatically try to reconnect on connection loss
            this.setState({
                ws: new WebSocket(URL),
            })
        }
    }

    addMessage = message =>
        this.setState(state => ({ messages: [message, ...state.messages] }));

    submitMessage = messageString => {
        // on submitting the ChatInput form, send the message, add it to the list and reset the input
        const message = { name: UserStore.username, message: messageString };
        this.ws.send(JSON.stringify(message));
        this.addMessage(message)
    };

    render() {
        return (
            <div className='chat'>
                <label htmlFor="name">
                    Chat :
                </label>
                <ChatInput
                    ws={this.ws}
                    onSubmitMessage={messageString => this.submitMessage(messageString)}
                />
                {this.state.messages.map((message, index) =>
                    <ChatMessage
                        key={index}
                        message={message.message}
                        name={message.name}
                    />,
                )}
            </div>
        )
    }
}

export default Chat