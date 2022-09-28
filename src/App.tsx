import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ThemeToggle from './components/ThemeToggle';
import Nav from './components/Nav';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import './App.css';


function App() {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <main className={`App relative ${darkToggle ? 'dark' : ''}`}>
      <ThemeToggle
        darkToggle={darkToggle}
        setDarkToggle={setDarkToggle}
      />
      <Nav />
      <section className='bg-neutral-200 dark:bg-emerald-900 w-screen h-screen flex justify-center items-center relative'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
