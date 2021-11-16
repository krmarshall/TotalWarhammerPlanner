import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <div className="bg-gray-800 w-screen h-screen px-20 py-12 font-CaslonAntique">
      <div className="bg-gray-700 w-full h-full border border-gray-500 rounded-md px-6 py-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
        <Router>
          <Suspense fallback={<p className="text-center text-4xl text-gray-200">Loading...</p>}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </div>
    </div>
  );
}

export default App;
