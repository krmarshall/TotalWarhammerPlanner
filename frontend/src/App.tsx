import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppProvider } from './contexts/AppContext';

const Home = lazy(() => import('./pages/Home'));
const Planner = lazy(() => import('./pages/Planner'));
const About = lazy(() => import('./pages/About'));

const App = () => {
  return (
    <AppProvider>
      <div className="bg-gray-800 w-screen h-screen px-12 py-12 font-CaslonAntique">
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
        <div className="bg-gray-700 w-full h-full border border-gray-500 rounded-md px-6 py-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
          <BrowserRouter>
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
                <Route path="/planner/:game/:faction/:character/:code?" element={<Planner />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
