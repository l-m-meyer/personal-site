import { useState } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <div className={`App relative ${darkToggle ? 'dark' : ''}`}>
      <button
        onClick={() => setDarkToggle(!darkToggle)}
        className="fixed top-5 right-5"
        style={{ zIndex: 1 }}
      >
        Switch to Light | Dark
      </button>
      <div className='bg-neutral-200 dark:bg-emerald-900 w-screen h-screen flex justify-center items-center relative'>
        <Header />
        <Contact />
      </div>
    </div>
  );
}

export default App;
