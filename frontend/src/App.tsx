import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-gray-700 w-screen h-screen px-24 py-12">
      <div className="bg-gray-600 w-full h-full border border-gray-400 rounded-md px-6 py-6">
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
