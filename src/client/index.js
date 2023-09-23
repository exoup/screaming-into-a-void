import { h, render } from 'preact';
import App from './App';
import 'preact/debug';

document.addEventListener("DOMContentLoaded", () => {
    render(<App />, document.getElementById('main'));
});