import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <div className={`App relative ${darkToggle ? 'dark' : ''}`}>
      <ThemeToggle
        darkToggle={darkToggle}
        setDarkToggle={setDarkToggle}
      />
      <section className='bg-neutral-200 dark:bg-emerald-900 w-screen h-screen flex justify-center items-center relative'>
        <Header
          name="Lisa Meyer"
          title="Full Stack Web Developer"
          email="lisamermey@gmail.com"
        />
      </section>
    </div>
  );
}

export default App;
