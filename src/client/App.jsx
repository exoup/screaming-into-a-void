import Router from 'preact-router';
import { h } from 'preact';
import VoidHome from './components/VoidHome';
//Other component imports..

const App = () => {
  return (
    <Router>
      <VoidHome path="/" />
    </Router>
  )
}

export default App;