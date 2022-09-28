import { useState } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
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
        />
        <Contact
          email="lisamermey@gmail.com"
          phone="647.973.5758"
        />
      </section>
    </div>
  );
}

export default App;
