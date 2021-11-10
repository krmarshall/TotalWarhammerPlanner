import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-gray-800 w-screen h-screen px-20 py-12 font-CaslonAntique">
      <div className="bg-gray-700 w-full h-full border border-gray-500 rounded-md px-6 py-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
