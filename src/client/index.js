import { h, render } from 'preact';
import App from './App';
// import 'preact/debug'; //TODO: Remove on deploy

document.addEventListener("DOMContentLoaded", () => {
    render(<App />, document.getElementById('main'));
});