import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useMediaQuery } from 'react-responsive';
import { AppProvider } from './contexts/AppContext';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';

const Home = lazy(() => import('./pages/Home'));
const Planner = lazy(() => import('./pages/Planner'));
const About = lazy(() => import('./pages/About'));
const Issues = lazy(() => import('./pages/Issues'));

const App = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1200px)' });
  return (
    <AppProvider>
      <div className="bg-gray-800 w-screen h-screen px-8 font-CaslonAntique select-none">
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 2500,
            style: {
              background: '#4b5563',
              color: '#e5e7eb',
              fontSize: 'x-large',
              userSelect: 'none',
              border: '1px solid rgb(107 114 128)',
            },
          }}
        />
        <BrowserRouter>
          <Header />
          <div className="h-[88vh] bg-gray-700 w-full border border-gray-500 rounded-md px-2 py-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
            {isTabletOrMobile ? (
              <div className="flex flex-col place-items-center mt-[20vh]">
                <h5 className="text-center text-gray-200 text-4xl">
                  Your display is not large enough to reasonably display skill trees. Sorry! ._.
                </h5>
              </div>
            ) : (
              <Suspense fallback={<LoadingSpinner loadingText="Loading..." />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="planner" element={<Planner />}>
                    <Route path=":mod" element={<Planner />}>
                      <Route path=":faction" element={<Planner />}>
                        <Route path=":character" element={<Planner />}>
                          <Route path=":code" element={<Planner />} />
                        </Route>
                      </Route>
                    </Route>
                  </Route>
                  <Route path="/about" element={<About />} />
                  <Route path="/issues" element={<Issues />} />
                </Routes>
              </Suspense>
            )}
          </div>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
};

export default App;
