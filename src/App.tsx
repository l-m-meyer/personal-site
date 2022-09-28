import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ThemeToggle from './components/ThemeToggle';
import Nav from './components/Nav';
import './App.css';


function App() {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <div className={`App relative ${darkToggle ? 'dark' : ''}`}>
      <ThemeToggle
        darkToggle={darkToggle}
        setDarkToggle={setDarkToggle}
      />
      <Nav />
      <main className='bg-neutral-200 dark:bg-emerald-900 w-screen h-screen flex justify-center items-center relative'>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
