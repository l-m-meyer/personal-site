import React from 'react';
import CTA from './components/cta';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <div className="App bg-neutral-200 w-screen h-screen flex justify-center items-center">
      <CTA />
      <Contact />
    </div>
  );
}

export default App;
