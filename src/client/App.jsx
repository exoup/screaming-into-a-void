import Router from 'preact-router';
import { h } from 'preact';
import VoidHome from './components/VoidHome';
import VoidAbout from './components/VoidAbout';
//Other component imports..

const App = () => {
  return (
    <Router>
      <VoidHome path="/" />
      <VoidAbout path="/about" />
    </Router>
  )
}

export default App;