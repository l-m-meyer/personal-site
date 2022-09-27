import { useState } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function App() {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <div className={`App relative ${darkToggle ? 'dark' : ''}`}>
      <button
        onClick={() => setDarkToggle(!darkToggle)}
        className="fixed top-5 right-5 bg-emerald-500 rounded-full p-2 w-20 flex justify-around"
        style={{ zIndex: 1 }}
      >
        <FontAwesomeIcon
          icon={solid('moon')}
          className={`${darkToggle ? 'text-emerald-100' : 'text-emerald-900'}`}
        />
        <FontAwesomeIcon
          icon={solid('sun')}
          className={`${darkToggle ? 'text-emerald-900' : 'text-emerald-100'}`}
        />
      </button>
      <div className='bg-neutral-200 dark:bg-emerald-900 w-screen h-screen flex justify-center items-center relative'>
        <Header />
        <Contact />
      </div>
    </div>
  );
}

export default App;
