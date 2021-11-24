import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
const Home = lazy(() => import('./pages/Home'));
const Planner = lazy(() => import('./pages/Planner'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <AppProvider>
      <div className="bg-gray-800 w-screen h-screen px-20 py-12 font-CaslonAntique">
        <div className="bg-gray-700 w-full h-full border border-gray-500 rounded-md px-6 py-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
          <Router>
            <Suspense
              fallback={
                <div className="flex flex-col place-items-center">
                  <p className="text-center text-4xl text-gray-200">Loading...</p>
                  <div className="lds-dual-ring"></div>
                </div>
              }
            >
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route path="/planner/:faction/:character/:code?">
                  <Planner />
                </Route>

                <Route path="/about">
                  <About />
                </Route>
              </Switch>
            </Suspense>
          </Router>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
