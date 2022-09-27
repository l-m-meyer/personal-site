import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App bg-neutral-200 dark:bg-emerald-900 w-screen h-screen flex justify-center items-center relative">
      <Header />
      <Contact />
    </div>
  );
}

export default App;
