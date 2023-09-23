import { h, Fragment } from 'preact';

const MessageForm = () => {
    return (
        <>
            <form action="" method="post">
                <label for="screamInput">Scream:<br />
                    <textarea name="screamInput" id="screamInput"></textarea>
                </label><br />
                <input type="submit" value="Scream" />
            </form>
        </>
    )
}

export default MessageForm