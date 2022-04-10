import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppProvider } from './contexts/AppContext';
import Header from './components/Header';

const Home = lazy(() => import('./pages/Home'));
const Planner = lazy(() => import('./pages/Planner'));
const About = lazy(() => import('./pages/About'));
const Issues = lazy(() => import('./pages/Issues'));

const App = () => {
  return (
    <AppProvider>
      <div className="bg-gray-800 w-screen h-screen px-8 font-CaslonAntique">
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
          <div className="h-[88vh] bg-gray-700 w-full border border-gray-500 rounded-md px-4 py-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
            <Suspense
              fallback={
                <div className="flex flex-col place-items-center">
                  <p className="text-center text-4xl text-gray-200">Loading...</p>
                  <div className="lds-dual-ring"></div>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="planner" element={<Planner />}>
                  <Route path=":game" element={<Planner />}>
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
          </div>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
};

export default App;
