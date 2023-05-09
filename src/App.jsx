import React from 'react';
import './App.css';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/errorFallback';
import TopBar from './components/topBar';
import Intro from './sections/intro';
import Features from './sections/features';
import Technology from './sections/technology';
import CTA from './sections/CTA';
import Contact from './sections/contact';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className='App'>
        <div className='container'>
          <TopBar />
          <Intro />
          <Features />
          <Technology />
          <CTA />
          <Contact />
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
