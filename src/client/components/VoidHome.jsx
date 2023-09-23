import { Component, h, Fragment } from 'preact';
import MessageContainer from './MessageContainer';
import MessageForm from './MessageForm';

export default class VoidHome extends Component {
    render() {
        return (
            <>
                <MessageContainer></MessageContainer>
                <MessageForm></MessageForm>
            </>
        )
    }
};